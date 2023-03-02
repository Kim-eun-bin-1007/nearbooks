import styled from "styled-components";

export const ErrorStyle = styled.div`
  box-sizing: border-box;
  padding: 120px 15px 60px;
  min-height: 100vh;
  text-align: center;

  .error {
    &__title {
      font-size: 32px;
      font-weight: 600;
      word-break: keep-all;
      word-wrap: break-word;
    }

    &__desc {
      color: #666;
      line-height: 1.5;
    }

    &__func {
      margin-top: 40px;
    }
  }

  @media (min-width: 768px) {
    padding-top: 150px;

    .error {
      &__title {
        font-size: 42px;
      }

      &__desc {
        font-size: 18px;
      }

      &__func {
        margin-top: 60px;
      }
    }
  }
`;
