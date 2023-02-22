import styled from "styled-components";

export const BoroughWrap = styled.div`
  padding: 70px 15px 30px;
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
  .breadcrumbs {
    position: sticky;
    top: 60px;
    z-index: 100;
    padding: 15px 0;
    background-color: white;

    &__borough {
      font-size: 20px;
      font-weight: 600;
    }
  }

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

    &__heading {
    }

    &__title {
      box-sizing: border-box;
      display: inline-block;
      margin: 10px;
      margin-left: 0;
      font-size: 18px;
      color: #333;
    }

    .badge {
      top: -2px;
    }

    &__content {
    }

    &-info {
      display: flex;
      align-items: flex-start;
      margin-bottom: 8px;

      &__dt {
        position: relative;
        display: block;
        width: 90px;
        font-size: 14px;
        color: #444;

        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 3px;
          right: 15px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }

      &__dd {
        display: block;
        margin: 0;
        width: calc(100% - 100px);
        font-size: 14px;
        color: #444;
        word-break: keep-all;
        word-wrap: break-word;
      }

      &__tel {
        text-decoration: underline;
      }
    }

    &__func {
      display: flex;
      justify-content: flex-end;
      margin-top: 25px;
    }
  }
`;
