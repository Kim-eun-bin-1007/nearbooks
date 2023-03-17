import { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "./UI/Modal";
import { HomeWrap } from "../style/Home";
import { ModalInner } from "../style/Common";

function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
  const helpList = [
    {
      title: "공공도서관",
      desc: { __html: "공공도서관이란 열람석 60좌석 이상, 기본장서 3,000권 이상, 연간증서 300권 이상의 조건을 갖춘 도서관입니다. 공중의 정보 이용, 문화 활동, 독서 활동 및 평생교육을 목적으로 설립되어 다양한 프로그램을 제공하기도 합니다." },
    },
    {
      title: "작은도서관",
      desc: { __html: "작은도서관이란 기본장서 1,000권 이상을 갖춘 도서관으로 공공도서관이 부족한 곳에 설치되어 지식정보 접근성을 높이는 목적을 가지고 있습니다.<br />열람석은 현재(2023년 3월 기준) 법적 기준에 제한이 없어 별도로 존재하지 않을 수 있습니다. 관련 문의는 해당 도서관에 별도 문의해주시기 바랍니다." },
    },
  ];

  const modalInner = (
    <ModalInner>
      {helpList.map((item, i) => {
        return (
          <div className="data-info" key={i}>
            <b className="data-info__category">{item.title}</b>
            <p className="data-info__p" dangerouslySetInnerHTML={item.desc} />
          </div>
        );
      })}
      <div className="modal-inner__func">
        <button className="btn" onClick={() => setIsOpenModal(false)}>
          확인
        </button>
      </div>
    </ModalInner>
  );

  return (
    <HomeWrap>
      <p className="desc">
        NearbyBooks는 서울 시내의 공공도서관과 작은도서관의 정보를 제공하는
        서비스입니다.
      </p>

      <div className="help">
        <button className="link-btn" onClick={() => setIsOpenModal(true)}>
          <span className="help__text">
            공공도서관 &middot; 작은도서관이란?
          </span>
        </button>
      </div>

      <ul className="category">
        {category.map((item, i) => {
          return (
            <li className="category__item" key={i}>
              <Link to={item.link} className="category__link">
                <h2 className="category__title">{item.title}</h2>
                <img src={item.img} alt="" className="category__img" />
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="tip">
        위치정보 제공에 동의하시면 현재위치를 기반으로 가까운 도서관을 찾을 수
        있습니다.
        <br />
        위치정보 설정 후 <span className="tip__em">'내 주변 도서관 정보'</span>
        를 이용해주세요 :)
      </p>

      {isOpenModal && <Modal>{modalInner}</Modal>}
    </HomeWrap>
  );
}

export default Home;
