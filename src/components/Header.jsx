import { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";

import { LibraryCtx } from "../store/library-context";
import { UserCtx } from "../store/user-context";
import CloseBtn from './UI/CloseBtn';
import { StyledHeader, Menu } from "../style/Header";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { getLocation: getUserLocation } = useContext(UserCtx);
  const { getLibraryList } = useContext(LibraryCtx);

  useEffect(() => {
    getLibraryList();
    getUserLocation();
  }, [getLibraryList, getUserLocation]);

  const showMenu = () => {
    setIsOpenMenu(true);
  };

  const hideMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <h1 className="hidden">NearbyBooks</h1>
      <CSSTransition
        in={!isOpenMenu}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: "",
          enterActive: "header--show",
          exit: "",
          exitActive: "header--hide",
        }}
      >
        <StyledHeader>
          <button className="menu" onClick={showMenu}>
            <span className="menu__line" />
            <span className="menu__line" />
            <span className="menu__line" />
          </button>
          <Link to="/">
            <img src="/assets/logo.png" alt="NearbyBooks" className="logo" />
          </Link>
        </StyledHeader>
      </CSSTransition>
      <CSSTransition
        in={isOpenMenu}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: "",
          enterActive: "menu--open",
          exit: "",
          exitActive: "menu--close",
        }}
      >
        <Menu>
          <CloseBtn text='메뉴 닫기' onClickHandler={hideMenu} />
          <ul className="menu-list">
            <li className="menu-item">
              <NavLink
                to="/borough"
                className={(item) =>
                  item.isActive ? "menu-title menu-title--active" : "menu-title"
                }
                onClick={hideMenu}
              >
                자치구별 도서관
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/map"
                className={(item) =>
                  item.isActive ? "menu-title menu-title--active" : "menu-title"
                }
                onClick={hideMenu}
              >
                내 주변 도서관
              </NavLink>
            </li>
          </ul>
        </Menu>
      </CSSTransition>
    </>
  );
}

export default Header;
