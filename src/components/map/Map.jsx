import { useState, useRef, useEffect, useContext, useCallback } from "react";

import LibraryInfo from "../LibraryInfo";
import CloseBtn from '../UI/CloseBtn';
import useMap from "../../hook/use-map";
import useDebounce from "hook/use-debounce";
import { UserCtx } from "../../store/user-context";
import { MapStyle } from "../../style/Map";
import { LibraryView } from '../../style/Borough';
import { MapContainer } from "../../style/MapContainer";

const { kakao } = window;

function Map() {
  const mapRef = useRef();
  const infoRef = useRef();
  const [windowHeight, setWindowHeight] = useState(0);
  const [infoRefHeight, setInfoRefHeight] = useState(0);
  const [mapHeight, setMapHeight] = useState(0);
  const { location, isGetLocation } = useContext(UserCtx);
  const {
    mapObj,
    libraryType,
    isSelectedMarker,
    selectedMarker,
    createMap,
    changeLibraryType,
    movePosition,
    closeInfo,
    returnMarkerImg,
  } = useMap();

  useEffect(() => {
    createMap(mapRef.current);
    setWindowHeight(window.innerHeight);
  }, [createMap]);

  // infoRef 높이값 구하기(컴포넌트 렌더링 후 실행하기 위해 dependencies 사용X)
  useEffect(() => {
    if (
      infoRef.current &&
      infoRef.current.offsetHeight !== infoRefHeight
    ) {
      setInfoRefHeight(infoRef.current.offsetHeight);
    }
  });

  // infoRefHeight가 변경될 때마다 mapHeight값 update
  useEffect(() => {
    setMapHeight(`${windowHeight - infoRefHeight}px`);
  }, [windowHeight, infoRefHeight]);

  // mapHeight가 변경될 때마다 지도 사이즈와 센터값 변경
  useEffect(() => {
    if (!mapObj || mapHeight === 0 || location.lat === 0) return;

    let center;

    if (selectedMarker.info) {
      center = new kakao.maps.LatLng(
        selectedMarker.info.XCNTS,
        selectedMarker.info.YDNTS
      );
    } else {
      center = new kakao.maps.LatLng(location.lat, location.lng);
    }

    mapObj.relayout();
    mapObj.panTo(center);
  }, [mapObj, mapHeight, selectedMarker.info, location]);

  // 도서관정보 show, hide 변경될때 지도 사이즈도 변경
  useEffect(() => {
    const height = isSelectedMarker ? infoRef.current.offsetHeight : 0;
    setInfoRefHeight(height);
  }, [isSelectedMarker]);

  // resize 이벤트
  const resizeEvent = useCallback(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  useDebounce({ type: "resize", listener: resizeEvent, delay: 150 });
  useEffect(() => {
    window.addEventListener("orientationchange", resizeEvent);
  }, [resizeEvent]);

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
  };

  return (
    <>
      {isSelectedMarker && (
        <LibraryView>
          <div className="library-pad in-map" ref={infoRef}>
            <CloseBtn
              text="도서관정보 닫기"
              onClickHandler={closeInfoHandler}
            />
            <LibraryInfo library={selectedMarker.info} />
          </div>
        </LibraryView>
      )}
      <MapStyle>
        <MapContainer ref={mapRef} height={mapHeight} />
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
