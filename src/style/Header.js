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
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: linear-gradient(to right, #e76539 28%, transparent 200%);

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
        content: '';
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
    font-size: 32px;
    font-weight: 600;
    color: #fdf1ed;

    &:hover,
    &:focus {
    }

    &--active {
      color: #477d73;

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        right: -12px;
        width: 10px;
        height: 10px;
        background-color: #477d73;
        border-radius: 50%;
      }
    }

  }
`;