import { useState, useRef, useEffect, useContext, useCallback } from 'react';

import { UserCtx } from '../store/user-context';
import { LibraryCtx } from '../store/library-context';
import './Map.css';

const { kakao } = window;

function Map() {
  const [libraryMap, setLibraryMap] = useState(null);
  const [libraryType, setLibraryType] = useState('public');
  const [publicMarkers, setPublicMarkers] = useState([]);
  const [publicOverlays, setPublicOverlays] = useState([]);
  const [smallMarkers, setSmallMarkers] = useState([]);
  const [smallOverlays, setSmallOverlays] = useState([]);
  
  const mapRef = useRef();
  const userCtx = useContext(UserCtx);
  const {publicLibrary, smallLibrary} = useContext(LibraryCtx);

  // [TODO] : UserCtx.getLocation이 null이면 로딩스피너를 노출
  // [TODO] : 함수 분리(덩치 너무 커짐)
  const createMap = useCallback(() => {
    // map 생성
    const mapOption = {
      center: new kakao.maps.LatLng(userCtx.location.lat, userCtx.location.lng),
      level: 4,
    };
    const map = new kakao.maps.Map(mapRef.current, mapOption);
    map.setMaxLevel(6);
    setLibraryMap(map);

    if (userCtx.isGetLocation) {
      // 유저 마커
      const userMarkerSrc = "/assets/marker/pin-user.svg";
      const userMarkerSize = new kakao.maps.Size(36, 46);
      const userMarkerOptions = { offset: new kakao.maps.Point(18, 46) };

      const userMarkerSet = new kakao.maps.MarkerImage(
        userMarkerSrc,
        userMarkerSize,
        userMarkerOptions
      );
      const userMarkerPosition = new kakao.maps.LatLng(
        userCtx.location.lat,
        userCtx.location.lng
      );

      const userMarker = new kakao.maps.Marker({
        position: userMarkerPosition,
        image: userMarkerSet,
      });

      userMarker.setMap(map);
      userMarker.setZIndex(1);
    }

    if (publicLibrary === {} || smallLibrary === {}) return;

    let publicMarkerList = [];
    let publicOverlayList = [];
    let smallMarkerList = [];
    let smallOverlayList = [];
    const publicImgSrc = "/assets/marker/pin-primary.svg";
    const smallImgSrc = "/assets/marker/pin-secondary.svg";
    const imgSize = new kakao.maps.Size(40, 40);
    const imgOption = { offset: new kakao.maps.Point(20, 40) };

    const publicMarkerImg = new kakao.maps.MarkerImage(
      publicImgSrc,
      imgSize,
      imgOption
    );
    const smallMarkerImg = new kakao.maps.MarkerImage(
      smallImgSrc,
      imgSize,
      imgOption
    );

    const setCustomOverlay = (libraryName, position, marker) => {
      const content =
        `<div class='overlay'>
          <span class='overlay-text'>${libraryName}</span>
        </div>`;

      const customOverlay = new kakao.maps.CustomOverlay({
        map,
        position,
        content,
        yAnchor: 2,
        zIndex: 1,
      });

      customOverlay.setMap(map);
      customOverlay.setVisible(false);

      // 마커에 이벤트 등록
      kakao.maps.event.addListener(marker, "click", () => {
        customOverlay.setVisible(!customOverlay.getVisible());
      });

      return customOverlay;
    };

    // 공공도서관 마커
    for (const key in publicLibrary) {
      publicLibrary[key].forEach((library) => {
        const position = new kakao.maps.LatLng(
          library.XCNTS,
          library.YDNTS
        );

        const publicMarker = new kakao.maps.Marker({
          position: position,
          image: publicMarkerImg,
        });

        publicMarker.setMap(map);
        const overlay = setCustomOverlay(library.LBRRY_NAME, position, publicMarker);

        publicMarkerList.push(publicMarker);
        publicOverlayList.push(overlay);
      });
    }

    // 작은도서관 마커
    for (const key in smallLibrary) {
      smallLibrary[key].forEach((library) => {
        const position = new kakao.maps.LatLng(library.XCNTS, library.YDNTS);
    
        const smallMarker = new kakao.maps.Marker({
          position: position,
          image: smallMarkerImg,
        });

        smallMarker.setMap(map);
        const overlay = setCustomOverlay(library.LBRRY_NAME, position, smallMarker);

        smallMarkerList.push(smallMarker);
        smallMarker.setVisible(false);
        smallOverlayList.push(overlay);
      });
    }

    // 마커와 커스텀 오버레이 state update
    setPublicMarkers(publicMarkerList);
    setPublicOverlays(publicOverlayList);
    setSmallMarkers(smallMarkerList);
    setSmallOverlays(smallOverlayList);
  }, [userCtx, publicLibrary, smallLibrary]);

  useEffect(() => {
    createMap();
  }, [createMap]);

  // category select event
  const changeLibraryType = type => {
    if (libraryType === type) return;
    setLibraryType(type);

    if (type === 'public') {
      publicMarkers.forEach(marker => {
        marker.setVisible(true);
      });
      smallMarkers.forEach(marker => {
        marker.setVisible(false);
      });
      smallOverlays.forEach(overlay => {
        overlay.setVisible(false);
      });
    } else if (type === 'small') {
      publicMarkers.forEach((marker) => {
        marker.setVisible(false);
      });
      smallMarkers.forEach((marker) => {
        marker.setVisible(true);
      });
      publicOverlays.forEach(overlay => {
        overlay.setVisible(false);
      });
    }
  };

  // move to 내 위치
  const movePosition = () => {
    const moveLatLng = new kakao.maps.LatLng(userCtx.location.lat, userCtx.location.lng);
    libraryMap.panTo(moveLatLng);
  };

  const publicBtnClass = libraryType === 'public' ? 'category__btn active' : 'category__btn';
  const smallBtnClass = libraryType === 'small' ? 'category__btn active' : 'category__btn';

  return (
    <div className="map-wrap">
      <div ref={mapRef} className='map' />
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
        {userCtx.isGetLocation && (
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
    </div>
  );
}

export default Map;
