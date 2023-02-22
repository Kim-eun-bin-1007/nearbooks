import styled from "styled-components";

export const CommonMain = styled.div`
  @font-face {
    font-family: "SUIT-semiBold";
    src: url("./assets/font/SUIT-SemiBold.woff") format("woff");
  }

  .bold {
    font-family: "SUIT-semiBold";
  }

  .hidden {
    position: absolute !important;
    overflow: hidden;
    width: 1px;
    height: 1px;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  .btn {
    padding: 8px 20px;
    background-color: #e76539;
    border-radius: 10px;
    font-size: 14px;

    &--bright {
      background-color: #f2aa92;
    }

    &--sec {
      background-color: #477d73;
      color: white;

      &-bright {
        background-color: #a4ccc4;
      }
    }

    & + .btn {
      margin-left: 10px;
    }
  }

  .info {
    color: #666;
  }

  .badge {
    position: relative;
    display: inline-block;
    padding: 5px 12px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 15px;
    font-size: 12px;
  }

  .breadcrumbs {
    padding: 15px 0;
    color: #444;
    font-size: 14px;

    &__category {
      &::after {
        content: ' >';
      }
    }

    a.breadcrumbs__category {
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: calc(100% - 11px);
        height: 1px;
        background-color: #666;
      }
    }
  }
`;
