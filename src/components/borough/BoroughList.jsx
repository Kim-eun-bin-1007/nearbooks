import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { LibraryCtx } from "../../store/library-context";
import { LibraryList } from "../../style/Borough";

function BoroughList() {
  const { GuCode } = useParams();
  const libraryCtx = useContext(LibraryCtx);

  const publicLibrary = libraryCtx.publicLibrary[GuCode];
  const smallLibrary = libraryCtx.smallLibrary[GuCode];
  const guName = publicLibrary[0].CODE_VALUE;

  // total 구하기
  const GuTotal = publicLibrary.length + smallLibrary.length;

  const setLibraryItem = (library) => {
    const libraryInfo = [
      { dt: "운영시간", dd: library.OP_TIME },
      { dt: "정기휴관일", dd: library.FDRM_CLOSE_DATE },
      { dt: "전화번호", dd: library.TEL_NO },
      { dt: "주소", dd: library.ADRES },
    ];

    return (
      <li key={library.LBRRY_SEQ_NO} className="library">
        <div className="library__heading">
          <strong className="library__title bold">{library.LBRRY_NAME}</strong>
          <span className="badge">{library.LBRRY_SE_NAME}</span>
        </div>
        <dl className="library__content">
          {libraryInfo.map((info) => {
            if (!info.dd) return;

            let ddContent = info.dd;
            if (info.dt === "전화번호") {
              ddContent = (
                <a href={`tel:${info.dd}`} className="library-info__tel">
                  {info.dd.trim()}
                </a>
              );
            }
            return (
              <div className="library-info" key={Math.random()}>
                <dt className="library-info__dt">{info.dt}</dt>
                <dd className="library-info__dd">{ddContent}</dd>
              </div>
            );
          })}
        </dl>
        <div className="library__func">
          {library.HMPG_URL && (
            <a
              href={library.HMPG_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn--sec-bright"
            >
              홈페이지
            </a>
          )}
          <Link to={`${library.LBRRY_SEQ_NO}`} className="btn btn--sec">
            지도
          </Link>
        </div>
      </li>
    );
  };

  return (
    <LibraryList>
      <h2 className="hidden">{guName} 도서관 정보</h2>
      <div className="breadcrumbs">
        <p className="breadcrumbs__borough">{guName} &gt;</p>
      </div>

      <p className="info">총 {GuTotal}개</p>
      <ul className="library-list">
        {publicLibrary.map((library) => setLibraryItem(library))}
        {smallLibrary.map((library) => setLibraryItem(library))}
      </ul>
    </LibraryList>
  );
}

export default BoroughList;
