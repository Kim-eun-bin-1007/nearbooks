import { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { LibraryCtx } from "../store/library-context";
import { UserCtx } from "../store/user-context";

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
  }

  return (
    <>
      {!isOpenMenu && (
        <StyledHeader>
          <button className="menu" onClick={showMenu}>
            <span className="menu__line" />
            <span className="menu__line" />
            <span className="menu__line" />
          </button>
          <Link to="/">
            <img src="/assets/logo.png" alt="NearBooks" className="logo" />
          </Link>
        </StyledHeader>
      )}
      {isOpenMenu && (
        <Menu>
          <button className='close-btn' onClick={hideMenu}>
            <span className="close-btn__icon" />
            <span className="hidden">메뉴 닫기</span>
          </button>
          <ul className="menu-list">
            <li className="menu-item">
              <NavLink
                to="/"
                className={(item) =>
                  item.isActive ? "menu-title menu-title--active" : "menu-title"
                }
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
                onClick={() => setIsOpenMenu(false)}
              >
                내 주변 도서관
              </NavLink>
            </li>
          </ul>
        </Menu>
      )}
    </>
  );
}

export default Header;
