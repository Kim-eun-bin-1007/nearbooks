import styled from 'styled-components';

export const MapStyle = styled.div`
  position: relative;

  .map {
    width: 100%;
    height: 100vh;
  }

  .overlay {
    box-sizing: border-box;
    padding: 0.8rem;
    padding-right: 2rem;
    width: 180px;
    background-color: white;
    border-radius: 5px;

    &-text {
      font-size: 14px;
      white-space: normal;
      word-break: break-word;
    }
  }

  .category {
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 100;
    background-color: white;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);

    &__btn {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 15px;
      padding-left: 10px;
      width: 100%;
      opacity: 0.4;

      &--user {
        background-color: #eee;
        border-top: 0.2px solid #ddd;
        border-radius: 0 0 5px 5px;
        opacity: 1;

        .category__img {
          margin-left: 3px;
        }
      }
    }

    &__img {
      display: block;
      margin-right: 10px;
      height: 20px;
    }
  }

  .active {
    position: relative;
    opacity: 1;
    background-color: black;
    color: white;

    &::after {
      content: "";
      display: block;
      position: absolute;
    }
  }
`; 