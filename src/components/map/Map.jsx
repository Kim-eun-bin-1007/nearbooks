import { useRef, useEffect, useContext } from "react";

import LibraryInfo from "../LibraryInfo";
import CloseBtn from '../UI/CloseBtn';
import useMap from "../../hook/use-map";
import { UserCtx } from "../../store/user-context";
import { MapStyle } from "../../style/Map";
import { LibraryView } from '../../style/Borough';

function Map() {
  const mapRef = useRef();
  const isGetLocation = useContext(UserCtx).isGetLocation;
  const {
    libraryType,
    isSelectedMarker,
    selectedMarker,
    createMap,
    changeLibraryType,
    movePosition,
    closeInfo,
    returnMarkerImg,
  } = useMap();

  // [TODO] : UserCtx.getLocation이 null이면 로딩스피너를 노출

  useEffect(() => {
    createMap(mapRef.current);
  }, [createMap]);

  const publicBtnClass =
    libraryType === "public" ? "category__btn active" : "category__btn";
  const smallBtnClass =
    libraryType === "small" ? "category__btn active" : "category__btn";
  
  const closeInfoHandler = () => {
    closeInfo();
    returnMarkerImg();
  };

  const changeTypeHandler = (type) => {
    changeLibraryType(type);
    returnMarkerImg();
  }

  return (
    <>
      {isSelectedMarker && (
        <LibraryView>
          <div className="library-pad in-map">
            <CloseBtn
              text="도서관정보 닫기"
              onClickHandler={closeInfoHandler}
            />
            <LibraryInfo library={selectedMarker.info} />
          </div>
        </LibraryView>
      )}
      <MapStyle>
        <div ref={mapRef} className="map" />
        <ul className="category">
          <li className="category__item">
            <button
              className={publicBtnClass}
              onClick={changeTypeHandler.bind(null, "public")}
            >
              <img
                src="/assets/marker/pin-primary.svg"
                alt=""
                className="category__img"
              />
              <span className="category__title">공공도서관</span>
            </button>
          </li>
          <li className="category__item">
            <button
              className={smallBtnClass}
              onClick={changeTypeHandler.bind(null, "small")}
            >
              <img
                src="/assets/marker/pin-secondary.svg"
                alt=""
                className="category__img"
              />
              <span className="category__title">작은도서관</span>
            </button>
          </li>
          {/* 사용자 위치 정보 동의시에만 노출 */}
          {isGetLocation && (
            <li className="category__item">
              <button
                className="category__btn category__btn--user"
                onClick={movePosition}
              >
                <img
                  src="/assets/marker/pin-user.svg"
                  alt=""
                  className="category__img"
                />
                <span className="category__title">내 위치</span>
              </button>
            </li>
          )}
        </ul>
      </MapStyle>
    </>
  );
}

export default Map;
