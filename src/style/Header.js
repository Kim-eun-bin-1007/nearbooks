import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
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
    position: relative;
    left: -10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 12px 10px;
    width: 40px;
    height: 40px;

    & .menu__line {
      width: 100%;
      height: 2px;
      background-color: #111;
    }
  }

  .logo {
    display: block;
    width: 120px;
  }
`;

export const NavStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #e76539 28%, transparent 200%);
  overflow-y: auto;

  .pad {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    min-height: 460px;
    height: 100%;
    padding-bottom: 80px;
  }

  &.nav--open {
    animation: navOpen 0.2s;
  }

  &.nav--close {
    animation: navClose 0.23s;
  }

  @keyframes navOpen {
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

  @keyframes navClose {
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
    top: 15px;
    right: 15px;

    &__icon {
      &::before,
      &::after {
        width: 100%;
        height: 3px;
        background-color: white;
      }
    }
  }

  .nav {
    &-list {
      padding-top: 140px;
      padding-left: 40px;
    }

    &-item {
      margin-bottom: 28px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-title {
      position: relative;
      font-size: 38px;
      color: white;
      font-weight: 600;

      @media (hover: hover) {
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
      }

      &--active {
        color: white;

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
  }

  .copyright {
    position: absolute;
    bottom: 25px;
    left: 20px;
    display: flex;
    align-items: center;

    &__text {
      display: inline-block;
      position: relative;
      font-size: 14px;
      color: #eee;
      line-height: 1.4;

      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #eee;
      }
    }

    @media (hover: hover) {
      &:hover,
      &:focus {
        .copyright__text {
          color: #111;

          &::after {
            background-color: #111;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .close-btn {
      top: 25px;
      right: 25px;
    }

    .nav {
      &-list {
        padding-left: 60px;
      }

      &-item {
        margin-bottom: 56px;
      }

      &-title {
        font-size: 56px;

        @media (hover: hover) {
          &:hover,
          &:focus {
            &::after {
              top: -5px;
              right: -15px;
              width: 15px;
              height: 15px;
            }
          }
        }

        &--active::before {
          height: 4px;
        }
      }
    }

    .copyright {
      bottom: 25px;
      left: 30px;

      &__text {
        font-size: 15px;
      }
    }
  }
`;
