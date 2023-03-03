import styled from "styled-components";

export const CommonMain = styled.div`
  .hidden {
    position: absolute !important;
    overflow: hidden;
    width: 1px;
    height: 1px;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  .btn {
    padding: 10px 24px;
    background-color: #e76539;
    border: 1px solid #e76539;
    border-radius: 10px;

    .no-touchevents & {
      &:hover,
      &:focus {
        background-color: #f2aa92;
      }
    }

    & + .btn {
      margin-left: 10px;
    }

    // color variation
    &--sec {
      background-color: #477d73;
      border-color: #477d73;
      color: white;

      .no-touchevents & {
        &:hover,
        &:focus {
          background-color: #a4ccc4;
          color: #111;
        }
      }

      &-bright {
        background-color: #a4ccc4;
        border-color: #a4ccc4;

        .no-touchevents & {
          &:hover,
          &:focus {
            background-color: #e5f5ee;
          }
        }
      }
    }

    // size variation
    &--lg {
      padding: 15px 34px;
      font-size: 16px;

      & + .btn--lg {
        margin-left: 20px;
      }
    }

    // type variation
    &__icon {
      display: inline-block;
      position: relative;
      top: 2px;
      margin-left: 4px;
      font-size: 14px;
      color: #666;
    }
  }

  .info {
    color: #666;
  }

  .badge {
    position: relative;
    top: -2px;
    display: inline-block;
    padding: 5px 12px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 15px;
    font-size: 12px;
  }

  .breadcrumbs {
    padding: 20px 0;
    color: #444;

    &__category {
      &::after {
        content: " >";
      }
    }

    a.breadcrumbs__category {
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: calc(100% - 11px);
        height: 1px;
        background-color: #666;
      }

      .no-touchevents & {
        &:hover,
        &:focus {
          color: #477d73;
        }
      }
    }
  }

  // route transition
  .page {
    &-wrapper {
      position: relative;
      overflow: hidden;
      height: calc(var(--vh, lvh) * 100);
      width: 100%;
    }

    &-enter {
      transform: translateY(30px);
      opacity: 0;
    }

    &-enter-active {
      transform: translateY(0);
      opacity: 1;
      transition: all 350ms ease-in-out;
    }
  }

  @media (min-width: 768px) {
    .btn {
      padding: 12px 26px;
      font-size: 16px;

      & + .btn {
        margin-left: 12px;
      }

      // size variation
      &--lg {
        padding: 18px 38px;
        font-size: 18px;
      }
    }

    .badge {
      top: -2px;
      padding: 5px 15px;
      font-size: 13px;
    }

    .breadcrumbs {
      padding: 20px 0;
      font-size: 18px;
    }
  }
`;
