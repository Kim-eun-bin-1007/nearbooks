import { useRef, useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { UserCtx } from '../store/user-context';
import { LibraryCtx } from '../store/library-context';

function Map() {
  const userCtx = useContext(UserCtx);
  const {publicLibrary, smallLibrary} = useContext(LibraryCtx);
  const mapRef = useRef();

  // [TODO] : UserCtx.getLocation이 null이면 로딩스피너를 노출
  const createMap = useCallback(() => {
    // map 생성
    const { kakao } = window;
    const mapOption = {
      center: new kakao.maps.LatLng(userCtx.location.lat, userCtx.location.lng),
      level: 4,
    };
    const map = new kakao.maps.Map(mapRef.current, mapOption);
    map.setMaxLevel(6);

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

      // test : custom overlay
      const content = "<p style='background: white; padding: 5px'>유저 위치</p>"
      const position = new kakao.maps.LatLng(
        userCtx.location.lat,
        userCtx.location.lng
      );

      const customOverlay = new kakao.maps.CustomOverlay({
        map,
        position,
        content,
        yAnchor: 2.7
      });

      customOverlay.setMap(map);
      customOverlay.setZIndex(1);
    }

    if (publicLibrary !== {} && smallLibrary !== {}) {
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

      // 공공도서관 마커
      for (const key in publicLibrary) {
        publicLibrary[key].forEach((library) => {
          const markerPosition = new kakao.maps.LatLng(library.XCNTS, library.YDNTS);
      
          const publicMarker = new kakao.maps.Marker({
            position: markerPosition,
            image: publicMarkerImg,
          });

          publicMarker.setMap(map);
        });
      }

      // 작은도서관 마커
      for (const key in smallLibrary) {
        smallLibrary[key].forEach((library) => {
          const markerPosition = new kakao.maps.LatLng(library.XCNTS, library.YDNTS);
      
          const smallMarker = new kakao.maps.Marker({
            position: markerPosition,
            image: smallMarkerImg,
          });

          smallMarker.setMap(map);
        });
      }
    }
  }, [userCtx, publicLibrary, smallLibrary]);

  useEffect(() => {
    createMap();
  }, [createMap]);

  return (
    <>
      <p>in Map!</p>
      <Link to="/">Go to Home</Link>

      <div className=''>
        <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
        <ul className="">
          <li className="">
            <button>
              <img src="/assets/marker/pin-primary.svg" alt="" />
              {/* 마커이미지는 빼도될 듯 selcted 버튼만 잘 보여주면...  */}
              <span className="">공공도서관</span>
            </button>
          </li>
          <li className="">
            <button>
              <img src="/assets/marker/pin-secondary.svg" alt="" />
              <span className="">작은도서관</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Map;
