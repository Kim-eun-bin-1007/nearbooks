import { Link } from "react-router-dom";

import { ErrorStyle } from "../style/Error";

function Error() {
  return (
    <ErrorStyle>
      <img src="/assets/icon/warning.svg" alt="" className="error__img" />
      <h2 className="error__title bold">페이지를 찾을 수 없습니다.</h2>
      <p className="error__desc">
        존재하지 않는 페이지 입니다.
        <br /> URL을 다시한번 확인해주세요.
      </p>

      <div className="error__func">
        <Link to="/" className="btn btn--lg">
          메인으로
        </Link>
      </div>
    </ErrorStyle>
  );
}

export default Error;
