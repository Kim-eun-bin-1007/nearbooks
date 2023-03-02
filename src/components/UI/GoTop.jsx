import { useState, useCallback } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import useDebounce from "../../hook/use-debounce";
import styled from "styled-components";

const GoTopStyle = styled.div`
  .go-top {
    &__btn {
      box-sizing: border-box;
      position: fixed;
      bottom: 15px;
      right: 15px;
      padding: 15px;
      width: 50px;
      height: 50px;
      background-color: #fdf1ed;
      border: 2px solid #f2aa92;
      border-radius: 50%;
    }

    &__icon {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
    }

    &--show {
      animation: showAnim 0.3s;
    }

    &--hide {
      animation: hideAnim 0.3s;
    }

    @keyframes showAnim {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes hideAnim {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    @media (min-width: 768px) {
      &__btn {
        bottom: 25px;
        right: 25px;
      }
    }
  }
`;

const GoTop = () => {
  const [isShow, setIsShow] = useState(false);
  
  // 일정 구간이 지나야 go-top노출
  const showGotop = useCallback(() => {
    if (window.scrollY >= 500) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, []);
  useDebounce({ type: 'scroll', listener: showGotop, delay: 200 });

  // click event
  const goTopHandler = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  return (
    <GoTopStyle className='go-top'>
      <CSSTransition
        in={isShow}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: "",
          enterActive: "go-top--show",
          exit: "",
          exitActive: "go-top--hide",
        }}
      >
        <button className="go-top__btn" onClick={goTopHandler}>
          <img src="/assets/icon/arrow-up.svg" alt="" className="go-top__icon" />
          <span className="hidden">페이지 상단으로 돌아가기</span>
        </button>
      </CSSTransition>
    </GoTopStyle>
  );
};

export default GoTop;
