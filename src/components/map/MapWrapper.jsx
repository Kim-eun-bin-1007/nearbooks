import { useContext } from "react";

import Map from './Map';
import LoadingSpinner from "../UI/LoadingSpinner";
import { UserCtx } from "../../store/user-context";

function MapWrapper() {
  const userCtx = useContext(UserCtx);
  
  const showLoadingSpinner = userCtx.getLocation === null || userCtx.location.lng === null;
  const loadingText = <>지도가 보이지 않나요? <br /> 사용자 위치 사용권한을 설정해주세요.</>;

  return (
    <>
      {showLoadingSpinner && <LoadingSpinner text={loadingText} />}
      {!showLoadingSpinner && <Map />}
    </>
  );
}

export default MapWrapper;
