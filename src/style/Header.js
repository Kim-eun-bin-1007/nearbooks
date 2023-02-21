import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  height: 60px;
  background-color: #e76539;

  &.header--show {
    animation: headerShow 0.2s;
  }

  &.header--hide {
    animation: headerHide 0.23s;
  }

  @keyframes headerShow {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    30% {
      opacity: 1;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes headerHide {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    30% {
      opacity: 1;
      transform: translateY(-50%);
    }
    100% {
      opacity: 0;
      transform: translateY(-100%);
    }
  }

  .menu {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    width: 40px;
    height: 40px;

    & .menu__line {
      width: 65%;
      height: 2px;
      background-color: #222;
    }
  }

  .logo {
    display: block;
    width: 120px;
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #e76539 28%, transparent 200%);

  &.menu--open {
    animation: menuOpen 0.2s;
  }

  &.menu--close {
    animation: menuClose 0.23s;
  }

  @keyframes menuOpen {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    30% {
      opacity: 1;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes menuClose {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    30% {
      opacity: 1;
      transform: translateX(-50%);
    }
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;

    &__icon {
      display: block;
      position: relative;

      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: white;
        border-radius: 5px;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }

  .menu-list {
    margin-top: 140px;
    margin-left: 40px;
  }

  .menu-item {
    margin-bottom: 28px;
  }

  .menu-title {
    position: relative;
    font-size: 38px;
    font-weight: 600;
    color: white;
    -webkit-text-stroke: 0.25px rgba(255, 255, 255, 0.8);
    -webkit-text-fill-color: transparent;

    &:hover,
    &:focus {
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        right: -12px;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
      }
    }

    &--active {
      color: white;
      -webkit-text-fill-color: white;

      &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: white;
      }
    }
  }
`;