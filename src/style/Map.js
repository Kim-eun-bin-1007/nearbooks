import styled from 'styled-components';

export const MapStyle = styled.div`
  position: relative;

  .category {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    background-color: white;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);

    &__btn {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 11px 18px;
      padding-left: 13px;
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

  @media (min-width: 768px) {
    .category {
      bottom: 30px;
      right: 30px;

      &__btn {
        padding: 15px 20px;
        padding-left: 13px;

        &--user {
          border-top: 0.2px solid #ddd;

          .category__img {
            margin-left: 3px;
          }
        }
      }

      &__img {
        margin-right: 12px;
        height: 24px;
      }

      &__title {
        font-size: 16px;
      }
    }
  }
`; 