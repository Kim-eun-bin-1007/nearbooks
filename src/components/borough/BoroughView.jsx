import {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
  useMemo
} from "react";
import { useParams, Link } from "react-router-dom";

import { LibraryCtx } from "../../store/library-context";
import LibraryInfo from "./LibraryInfo";
import CloseBtn from "../UI/CloseBtn";
import { LibraryView, MapStyle } from "../../style/Borough";

const { kakao } = window;

function BoroughView() {
  const [mapObj, setMapObj] = useState(null);
  const [infoRefHeight, setInfoRefHeight] = useState(0);
  const [mapHeight, setMapHeight] = useState(0);
  const [isInfoOpened, setIsInfoOpened] = useState(true);
  const infoRef = useRef();
  const mapRef = useRef();
  const { GuCode: guCode, id } = useParams();
  const libraryContext = useContext(LibraryCtx);

  // 도서관 정보찾기
  const library = useMemo(() => {
    return libraryContext.publicLibrary[guCode].find(
      (library) => library.LBRRY_SEQ_NO === id
    ) ||
      libraryContext.smallLibrary[guCode].find(
        (library) => library.LBRRY_SEQ_NO === id
      );
  }, [guCode, id, libraryContext]);

  console.log(library);

  const setMap = useCallback(() => {
    const position = new kakao.maps.LatLng(library.XCNTS, library.YDNTS);
    // map 생성
    const mapOption = {
      center: position,
      level: 3,
    };
    const map = new kakao.maps.Map(mapRef.current, mapOption);
    map.setMaxLevel(6);
    setMapObj(map);

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
  
  if (
    infoRef.current &&
    infoRef.current.offsetHeight !== infoRefHeight &&
    infoRef.current.offsetHeight !== 0
  ) {
    // infoRef 높이값 구하기
    setInfoRefHeight(infoRef.current.offsetHeight);
  }

  // infoRefHeight가 변경될 때마다 mapHeight값 update
  useEffect(() => {
    if (infoRefHeight === 0) return; // 초기실행 방지
    setMapHeight(window.innerHeight - infoRefHeight);
  }, [infoRefHeight]);

  // mapHeight가 변경될 때마다 지도 사이즈와 센터값 변경
  useEffect(() => {
    if (mapHeight === 0) return; // 초기실행 방지
    const center = new kakao.maps.LatLng(library.XCNTS, library.YDNTS);
    mapObj.relayout();
    mapObj.setCenter(center);
  }, [mapObj, mapHeight, library]);

  // 도서관정보 show, hide 변경될때 지도 사이즈도 변경
  useEffect(() => {
    setInfoRefHeight(infoRef.current.offsetHeight);
  }, [isInfoOpened]);

  return (
    <LibraryView>
      <h2 className="hidden">{library.LBRRY_NAME}</h2>
      <div className="library-pad" ref={infoRef}>
        <div className="breadcrumbs">
          <Link to={`/borough/${guCode}`} className="breadcrumbs__category">
            {library.CODE_VALUE}
          </Link>
          {!isInfoOpened && <span> {library.LBRRY_NAME}</span>}
        </div>
        {!isInfoOpened && (
          <button
            className="btn btn--sec open-btn"
            onClick={setIsInfoOpened.bind(null, true)}
          >
            도서관정보 열기
          </button>
        )}
        {isInfoOpened && (
          <CloseBtn
            text="도서관정보 닫기"
            onClickHandler={setIsInfoOpened.bind(null, false)}
          />
        )}
        {isInfoOpened && <LibraryInfo library={library} hasMapBtn={false} />}
      </div>
      <MapStyle ref={mapRef} height={mapHeight} />
    </LibraryView>
  );
}

export default BoroughView;
