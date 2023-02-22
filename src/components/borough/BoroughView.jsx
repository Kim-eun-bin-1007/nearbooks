import { useState, useContext, useRef, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

import { LibraryCtx } from "../../store/library-context";
import LibraryInfo from "./LibraryInfo";
import CloseBtn from "../UI/CloseBtn";
import { LibraryView } from "../../style/Borough";

const { kakao } = window;

function BoroughView() {
  const [isInfoOpened, setIsInfoOpened] = useState(true);
  const mapRef = useRef();
  const { GuCode: guCode, id } = useParams();
  const libraryContext = useContext(LibraryCtx);

  // 도서관 정보찾기
  // [TODO] 최적화 하기
  const library =
    libraryContext.publicLibrary[guCode].find(
      (library) => library.LBRRY_SEQ_NO === id
    ) ||
    libraryContext.smallLibrary[guCode].find(
      (library) => library.LBRRY_SEQ_NO === id
    );

  console.log(library);

  const openInfo = () => {
    setIsInfoOpened(true);
  }

  const closeInfo = () => {
    setIsInfoOpened(false);
  };

  const setMap = useCallback(() => {
    const position = new kakao.maps.LatLng(library.XCNTS, library.YDNTS);

    // map 생성
    const mapOption = {
      center: position,
      level: 3,
    };
    const map = new kakao.maps.Map(mapRef.current, mapOption);
    map.setMaxLevel(6);

    // 마커 생성
    const ImgSrc =
      library.LBRRY_SE_NAME === "공공도서관"
        ? "/assets/marker/pin-primary.svg"
        : "/assets/marker/pin-secondary.svg";
    const imgSize = new kakao.maps.Size(40, 40);
    const imgOption = { offset: new kakao.maps.Point(20, 40) };

    const markerImg = new kakao.maps.MarkerImage(ImgSrc, imgSize, imgOption);

    const publicMarker = new kakao.maps.Marker({
      position: position,
      image: markerImg,
    });

    publicMarker.setMap(map);
  }, [library]);

  useEffect(() => {
    setMap();
  }, [setMap]);

  return (
    <LibraryView>
      <h2 className="hidden">{library.LBRRY_NAME}</h2>
      <div className="library-pad">
        <div className="breadcrumbs">
          <Link to={`/borough/${guCode}`} className="breadcrumbs__category">
            {library.CODE_VALUE}
          </Link>
          {!isInfoOpened && <span> {library.LBRRY_NAME}</span>}
        </div>
        {!isInfoOpened && (
          <button className="btn btn--sec open-btn" onClick={openInfo}>
            도서관정보 열기
          </button>
        )}
        {isInfoOpened && (
          <CloseBtn text="도서관정보 닫기" onClickHandler={closeInfo} />
        )}
        {isInfoOpened && <LibraryInfo library={library} hasMapBtn={false} />}
      </div>
      <div ref={mapRef} className="map" />
    </LibraryView>
  );
}

export default BoroughView;
