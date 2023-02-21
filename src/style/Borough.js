import styled from 'styled-components';

export const BoroughWrap = styled.div`
  padding: 60px 15px;
`;

export const BoroughList = styled.div`
  .borough {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    &-info {
      margin-top: 30px;
      color: #666;
    }

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