import styled from "styled-components";

export const ErrorStyle = styled.div`
  padding: 120px 15px 60px;
  text-align: center;

  .error {
    &__title {
      font-size: 32px;
    }

    &__desc {
      color: #666;
      line-height: 1.5;
    }

    &__func {
      margin-top: 40px;
    }
  }
`;
