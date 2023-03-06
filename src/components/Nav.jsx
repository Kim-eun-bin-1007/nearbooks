import { useState } from "react";
import { NavLink } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";

import CloseBtn from "./UI/CloseBtn";
import Modal from "./UI/Modal";
import { NavStyle, ModalInner } from "../style/Header";

const navList = [
  {
    link: "/borough",
    title: "자치구별 도서관",
  },
  {
    link: "/map",
    title: "내 주변 도서관",
  },
];

function Nav(props) {
  const { isOpenNav, navOpenHandler } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dataInfo = [
    {
      title: "공공도서관",
      copyright: "서울특별시",
      dataTitle: "서울시 공공도서관 현황정보",
      site: "https://data.seoul.go.kr/dataList/OA-15480/S/1/datasetView.do",
    },
    {
      title: "작은도서관",
      copyright: "서울특별시",
      dataTitle: "서울시 작은도서관 현황정보",
      site: "http://data.seoul.go.kr/dataList/OA-15481/S/1/datasetView.do",
    },
  ];
  const modalInner = (
    <ModalInner>
      <p className="modal-inner__desc">
        NearbyBooks에서 제공되는 공공도서관 및 작은도서관 정보는 서울
        열린데이터광장에서 제공하는 데이터를 사용합니다.
      </p>
      {dataInfo.map((item, i) => {
        return (
          <div className="data-info" key={i}>
            <b className="data-info__category">{item.title}</b>
            <dl className="data-info__dl">
              <div className="data-info__item">
                <dt className="data-info__dt">저작권 소유자:</dt>
                <dd className="data-info__dd">{item.copyright}</dd>
              </div>
              <div className="data-info__item">
                <dt className="data-info__dt">데이터 제목:</dt>
                <dd className="data-info__dd">{item.dataTitle}</dd>
              </div>
              <div className="data-info__item">
                <dt className="data-info__dt">사이트:</dt>
                <dd className="data-info__dd">
                  <a
                    className="data-info__link"
                    href={item.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    사이트 바로가기
                  </a>
                </dd>
              </div>
            </dl>
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

  const hideMenu = () => {
    navOpenHandler(false);
  };

  return (
    <CSSTransition
      in={isOpenNav}
      timeout={200}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "nav--open",
        exit: "",
        exitActive: "nav--close",
      }}
    >
      <NavStyle>
        <div className="pad">
          <CloseBtn text="메뉴 닫기" onClickHandler={hideMenu} />
          <ul className="nav-list">
            {navList.map((item, i) => {
              return (
                <li className="nav-item" key={i}>
                  <NavLink
                    to={item.link}
                    className={(item) =>
                      item.isActive
                        ? "nav-title nav-title--active"
                        : "nav-title"
                    }
                    onClick={hideMenu}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <button className="copyright" onClick={() => setIsOpenModal(true)}>
            <span className="copyright__text">저작권 안내</span>
          </button>
          {isOpenModal && <Modal>{modalInner}</Modal>}
        </div>
      </NavStyle>
    </CSSTransition>
  );
}

export default Nav;
