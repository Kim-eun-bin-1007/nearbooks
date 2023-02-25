import { useRef, useEffect, useContext } from "react";

import useMap from "../hook/use-map";
import { UserCtx } from "../store/user-context";
import { MapStyle } from "../style/Map";

function Map() {
  const mapRef = useRef();
  const isGetLocation = useContext(UserCtx).isGetLocation;
  const { libraryType, createMap, changeLibraryType, movePosition } = useMap();

  // [TODO] : UserCtx.getLocation이 null이면 로딩스피너를 노출

  useEffect(() => {
    createMap(mapRef.current);
  }, [createMap]);

  const publicBtnClass =
    libraryType === "public" ? "category__btn active" : "category__btn";
  const smallBtnClass =
    libraryType === "small" ? "category__btn active" : "category__btn";

  return (
    <MapStyle>
      <div ref={mapRef} className="map" />
      <ul className="category">
        <li className="category__item">
          <button
            className={publicBtnClass}
            onClick={changeLibraryType.bind(null, "public")}
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
            onClick={changeLibraryType.bind(null, "small")}
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
  );
}

export default Map;
