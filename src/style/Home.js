import styled from 'styled-components';

export const HomeWrap = styled.div`
  padding: 100px 15px 60px;

  .desc {
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 40px;
    max-width: 360px;
    font-size: 16px;
    color: #444;
    line-height: 1.5;
    text-align: center;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .category {
    display: flex;
    justify-content: space-between;

    &__item {
      margin-bottom: 30px;
      width: calc(50% - 10px);
    }

    &__link {
      box-sizing: border-box;
      display: block;
      position: relative;
      padding: 15px 15px 80px;
      background-color: #fdf1ed;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.04);
      border-radius: 5px;
      transition: 0.3s;

      &:hover,
      &:focus {
        background-color: #f8d4c9;
        box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
      }
    }

    &__title {
      margin: 0;
      font-size: 14px;
    }

    &__img {
      display: block;
      position: absolute;
      bottom: 15px;
      right: 15px;
      margin-top: 20px;
      width: 28px;
      height: 28px;
    }
  }

  .tip {
    margin: 0 auto;
    padding: 20px;
    max-width: 500px;
    border: 1px solid #eee;
    border-radius: 5px;
    font-size: 12px;
    color: #666;
    line-height: 1.5;
    text-align: center;
    word-break: keep-all;
    word-wrap: break-word;

    .tip__em {
      color: #111;
    }
  }
`;