import { Link } from "react-router-dom";

import { HomeWrap } from "../style/Home";

function Home() {
  const category = [
    {
      link: "borough",
      title: (
        <>
          자치구별
          <br /> 도서관 정보
        </>
      ),
      img: "/assets/icon/library.png",
    },
    {
      link: "map",
      title: (
        <>
          내 주변
          <br /> 도서관 정보
        </>
      ),
      img: "/assets/icon/map.png",
    },
  ];

  return (
    <HomeWrap>
      <p className="desc">
        NearbyBooks는 서울 시내의 공공도서관과 작은도서관의 정보를 제공하는
        서비스입니다.
      </p>

      <ul className="category">
        {category.map((item, i) => {
          return (
            <li className="category__item" key={i}>
              <Link to={item.link} className="category__link">
                <h2 className="category__title">{item.title}</h2>
                <img src={item.img} alt="" className='category__img' />
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="tip">
        위치정보 제공에 동의하시면 현재위치를 기반으로 가까운 도서관을 찾을 수
        있습니다.
        <br />
        위치정보 설정 후 <span className="tip__em">'내 주변 도서관 정보'</span>를
        이용해주세요 :)
      </p>
    </HomeWrap>
  );
}

export default Home;
