import styled from "styled-components";

export const BoroughWrap = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 70px 20px 60px;
  max-width: 960px;

  @media (min-width: 768px) {
    padding: 80px 40px 80px;
  }
`;

export const BoroughList = styled.div`
  padding-top: 20px;

  .borough {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    &__item {
      margin-top: 25px;
      width: calc(50% - 10px);

      &:nth-child(1),
      &:nth-child(2) {
        margin-top: 0;
      }
    }

    &__link {
      box-sizing: border-box;
      display: block;
      padding: 25px 15px;
      width: 100%;
      background-color: #fdf1ed;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.04);
      border-radius: 5px;
      text-align: center;
      transition: 0.2s;

      .no-touchevents & {
        &:hover,
        &:focus {
          background-color: #f8d4c9;
          box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
        }
      }
    }

    &__title {
      position: relative;
      font-size: 18px;
    }
  }

  @media (min-width: 768px) {
    .info {
      font-size: 16px;
    }

    .borough {
      margin-top: 28px;

      &__item {
        margin-top: 32px;
        width: calc(50% - 15px);
      }

      &__link {
        padding: 34px 15px;
      }

      &__title {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 960px) {
    .borough {
      &__item {
        margin-top: 40px;
        width: calc(33% - 15px);

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 0;
        }
      }
    }
  }
`;

export const LibraryList = styled.div`
  .library {
    box-sizing: border-box;
    margin-top: 40px;
    padding: 20px;
    border: 6px solid #eee;
    border-radius: 30px 20px 30px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.04);

    &:nth-child(1) {
      margin-top: 0;
    }

    &-list {
      margin-top: 15px;
    }

    @media (min-width: 768px) {
      padding: 30px;
      margin-top: 50px;
    }

    @media (min-width: 960px) {
      width: calc(50% - 20px);

      &:nth-child(2) {
        margin-top: 0;
      }

      &-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
`;

export const LibraryView = styled.div`
  .library-pad {
    box-sizing: border-box;
    position: relative;
    z-index: 100;
    padding: 60px 20px 0;
    background-color: #eee;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    &.in-map {
      padding-top: 70px;
    }
  }

  .library__func {
    padding-bottom: 20px;
  }

  .close-btn {
    top: 70px;
    right: 10px;
  }

  .open-btn {
    position: absolute;
    bottom: -15px;
    right: 15px;
    transform: translateY(100%);
    z-index: 100;
  }

  @media (min-width: 768px) {
    .library-pad {
      padding: 60px 30px 0;

      &.in-map {
        padding-top: 80px;

        .close-btn {
          top: 80px;
        }
      }
    }

    .library__func {
      padding-bottom: 32px;
    }

    .close-btn {
      top: 70px;
      right: 24px;
    }

    .open-btn {
      bottom: -20px;
      right: 30px;
    }
  }
`;