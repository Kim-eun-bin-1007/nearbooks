import { useState, useCallback, useEffect, useContext } from "react";

import { LibraryCtx } from "store/library-context";
import { UserCtx } from "../store/user-context";

const { kakao } = window;

const useMap = () => {
  const userCtx = useContext(UserCtx);
  const { publicLibrary, smallLibrary } = useContext(LibraryCtx);

  const [libraryMap, setLibraryMap] = useState(null);
  const [libraryType, setLibraryType] = useState("public");
  const [publicMarkers, setPublicMarkers] = useState([]);
  const [smallMarkers, setSmallMarkers] = useState([]);
  const [isSelectedMarker, setIsSelectedMarker] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState({});

  // 마커 이벤트 등록
  useEffect(() => {
    if (publicMarkers.length === 0 || smallMarkers.length === 0) return;

    const markerEvent = (markerList) => {
      markerList.forEach((item) => {
        kakao.maps.event.addListener(item.marker, "click", () => {
          setIsSelectedMarker(true);
          setSelectedMarker(item.info);
        });
      });
    };

    markerEvent(publicMarkers);
    markerEvent(smallMarkers);
  }, [publicMarkers, smallMarkers]);

  // 유저위치 마커 생성
  const setUserMarker = useCallback((map, lat, lng) => {
    const userMarkerSrc = "/assets/marker/pin-user.svg";
    const userMarkerSize = new kakao.maps.Size(36, 46);
    const userMarkerOptions = { offset: new kakao.maps.Point(18, 46) };

    const userMarkerSet = new kakao.maps.MarkerImage(
      userMarkerSrc,
      userMarkerSize,
      userMarkerOptions
    );
    const userMarkerPosition = new kakao.maps.LatLng(lat, lng);

    const userMarker = new kakao.maps.Marker({
      position: userMarkerPosition,
      image: userMarkerSet,
    });

    userMarker.setMap(map);
    userMarker.setZIndex(1);
  }, []);

  // 도서관 마커 생성
  const setLibraryMarker = useCallback((map, type, libraryList) => {
    const markerList = [];
    const imgSrc =
      type === "public"
        ? "/assets/marker/pin-primary.svg"
        : "/assets/marker/pin-secondary.svg";
    const imgSize = new kakao.maps.Size(40, 40);
    const imgOption = { offset: new kakao.maps.Point(20, 40) };

    const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);

    for (const key in libraryList) {
      libraryList[key].forEach((library) => {
        const position = new kakao.maps.LatLng(library.XCNTS, library.YDNTS);
        const marker = new kakao.maps.Marker({
          position,
          image: markerImg,
        });

        marker.setMap(map);
        markerList.push({ marker, info: library });
        if (type === "small") marker.setVisible(false); // 작은도서관 마커 초기 숨김 처리
      });

      if (type === "public") {
        setPublicMarkers(markerList);
      } else if (type === "small") {
        setSmallMarkers(markerList);
      }
    }
  }, []);

  // 지도 생성
  const createMap = useCallback(
    (ref) => {
      const lat = userCtx.location.lat;
      const lng = userCtx.location.lng;

      // map 생성
      const mapOption = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 4,
      };
      const map = new kakao.maps.Map(ref, mapOption);
      map.setMaxLevel(6);
      setLibraryMap(map);

      userCtx.isGetLocation && setUserMarker(map, lat, lng);

      if (publicLibrary !== {} || smallLibrary !== {}) {
        setLibraryMarker(map, "public", publicLibrary);
        setLibraryMarker(map, "small", smallLibrary);
      }
    },
    [setUserMarker, setLibraryMarker, userCtx, publicLibrary, smallLibrary]
  );

  // 도서관 타입 변경
  const changeLibraryType = useCallback(
    (type) => {
      if (libraryType === type) return;
      setIsSelectedMarker(false);
      setLibraryType(type);

      if (type === "public") {
        publicMarkers.forEach((item) => {
          item.marker.setVisible(true);
        });
        smallMarkers.forEach((item) => {
          item.marker.setVisible(false);
        });
      } else if (type === "small") {
        publicMarkers.forEach((item) => {
          item.marker.setVisible(false);
        });
        smallMarkers.forEach((item) => {
          item.marker.setVisible(true);
        });
      }
    },
    [libraryType, publicMarkers, smallMarkers]
  );

  // 사용자 위치로 가기
  const movePosition = useCallback(() => {
    const moveLatLng = new kakao.maps.LatLng(
      userCtx.location.lat,
      userCtx.location.lng
    );
    libraryMap.panTo(moveLatLng);
  }, [libraryMap, userCtx]);

  // 도서관 정보 닫기
  const closeInfo = useCallback(() => {
    setIsSelectedMarker(false);
  }, []);

  return {
    libraryType,
    isSelectedMarker,
    selectedMarker,
    createMap,
    changeLibraryType,
    movePosition,
    closeInfo,
  };
};

export default useMap;
