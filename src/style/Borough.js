import styled from "styled-components";

export const BoroughWrap = styled.div`
  padding: 70px 15px 60px;
`;

export const BoroughList = styled.div`
  .borough {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    &__item {
      margin-top: 20px;
      width: calc(50% - 10px);

      &:nth-child(1),
      &:nth-child(2) {
        margin-top: 0;
      }
    }

    &__link {
      box-sizing: border-box;
      display: block;
      padding: 20px 15px;
      width: 100%;
      background-color: #477d73;
      border-radius: 5px;
      text-align: center;

      &:hover,
      &:focus {
        .borough__title::after {
          content: "";
          display: block;
          position: absolute;
          top: 0px;
          right: 0px;
          transform: translate(100%, -50%);
          width: 10px;
          height: 10px;
          background-color: #e76539;
          border-radius: 50%;
        }
      }
    }

    &__title {
      position: relative;
      font-size: 18px;
      color: white;
    }
  }
`;

export const LibraryList = styled.div`
  .library {
    margin-top: 25px;
    padding: 20px;
    border: 6px solid #eee;
    border-radius: 30px 20px 30px 0;

    &:nth-child(1) {
      margin-top: 0;
    }

    &-list {
      margin-top: 10px;
    }
  }
`;

export const LibraryView = styled.div`
  .library-pad {
    box-sizing: border-box;
    position: relative;
    z-index: 100;
    padding: 60px 15px 0;
    background-color: #eee;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    &.in-map {
      position: fixed;
      padding-top: 70px;
      width: 100%;
    }
  }

  .library__func {
    padding-bottom: 20px;
  }

  .close-btn {
    top: 64px;
    right: 8px;
  }

  .open-btn {
    position: absolute;
    bottom: -15px;
    right: 15px;
    transform: translateY(100%);
    z-index: 100;
  }
`;

export const MapStyle = styled.div`
  width: 100%;
  height: ${props => props.height}px;
`;
