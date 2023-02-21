import { Link } from 'react-router-dom';

import { HomeWrap, InfoType } from '../style/Home';

function Home() {
  return (
    <HomeWrap>
      <InfoType>
        <li className="info-type__item">
          <Link to="borough">
            <h2 className="info-type__title">자치구별 도서관 정보</h2>
          </Link>
        </li>
        <li className="info-type__item">
          <Link to="map">
            <h2 className="info-type__title">내 주변 도서관 정보</h2>
          </Link>
        </li>
      </InfoType>
    </HomeWrap>
  );
}

export default Home;
