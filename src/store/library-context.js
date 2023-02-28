import React, { useState, useCallback } from "react";

export const LibraryCtx = React.createContext({
  total: {
    public: 0,
    small: 0,
  },
  publicLibrary: {},
  smallLibrary: {},
  getLibraryList: () => {},
});

let isFetchLibrary = false;
const api =
  "http://openapi.seoul.go.kr:8088/6c6b476c48646d73373141446f5962/json/";
const publicString = "SeoulPublicLibraryInfo";
const smallString = "SeoulSmallLibraryInfo";

const LibraryProvider = (props) => {
  const [publicTotal, setPublicTotal] = useState(0);
  const [smallTotal, setSmallTotal] = useState(0);
  const [publicLibrary, setPublicLibrary] = useState(null);
  const [smallLibrary, setSmallLibrary] = useState(null);

  // http 요청
  const getRequest = (api) => {
    return fetch(api)
      .then((response) => response.json())
      .catch((err) => err);
  };

  // 구코드로 데이터 분류
  const classifyData = (data, updateStateFn) => {
    let separateData = {};

    data.forEach((item) => {
      if (separateData[item.GU_CODE]) {
        separateData[item.GU_CODE].push(item);
      } else {
        const newGuCode = { [item.GU_CODE]: [item] };
        separateData = { ...separateData, ...newGuCode };
      }
    });

    updateStateFn(separateData);
  };

  // 도서관 정보 가져오기
  const getLibraryList = useCallback((api, libraryString, updateStateFn) => {
    if (isFetchLibrary) return;

    getRequest(`${api}${libraryString}/0/999/`).then((res) => {
      const total = res[libraryString]?.list_total_count;

      if (libraryString === "SeoulPublicLibraryInfo") {
        setPublicTotal(total);
      } else {
        setSmallTotal(total);
      }

      if (total >= 1000) {
        // 최대 1000건만 조회가능하여 초과할경우 분할하여 데이터 수신
        const turn = Math.ceil(total / 1000);
        const remainNum = total % 1000;
        let newLibrary = [...res[libraryString].row];

        for (let i = 2; i <= turn; i++) {
          const START_INDEX = 1000 * i - 1000;
          const END_INDEX = 1000 * i - 1;

          getRequest(
            `${api}${libraryString}/${START_INDEX}/${END_INDEX}/`
          ).then((response) => {
            // 마지막 반복이 아닐경우 동작
            if (i !== turn) {
              newLibrary.push(...response[libraryString].row);
              return;
            }

            // 마지막 반복에서만 동작
            if (remainNum === 0) {
              classifyData(newLibrary, updateStateFn);
            } else {
              const result = [...newLibrary, ...response[libraryString].row];
              classifyData(result, updateStateFn);
            }
          });
        }
      } else {
        classifyData(res[libraryString].row, updateStateFn);
      }

      isFetchLibrary = true;
    });
  }, []);

  const getLibraryData = useCallback(() => {
    // 공공도서관
    isFetchLibrary = false;
    getLibraryList(api, publicString, setPublicLibrary);

    // 작은도서관
    isFetchLibrary = false;
    getLibraryList(api, smallString, setSmallLibrary);
  }, [getLibraryList]);

  const libraryCtx = {
    total: {
      public: publicTotal,
      small: smallTotal,
    },
    publicLibrary,
    smallLibrary,
    getLibraryList: getLibraryData,
  };

  return (
    <LibraryCtx.Provider value={libraryCtx}>
      {props.children}
    </LibraryCtx.Provider>
  );
};

export default LibraryProvider;
