import { useEffect } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: var(--100vh, 100vh);
  background-color: rgba(0, 0, 0, 0.85);

  .modal {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    max-width: 500px;
    width: 80%;
    max-height: calc(100% - 30px);
    background-color: white;
    border-radius: 5px;
    overflow-y: auto;
  }

  @media (min-width: 768px) {
    .modal {
      padding: 30px;
    }
  }
`;

const Modal = (props) => {
  const container = document.querySelector(".common-style");
  const main = container.querySelector("main");
  const nav = container.querySelector(".nav");

  useEffect(() => {
    !nav && disableBodyScroll(main);

    return () => {
      !nav && enableBodyScroll(main);
    };
  }, [main, nav]);

  return (
    <>
      {ReactDom.createPortal(
        <ModalStyle>
          <div className="modal">{props.children}</div>
        </ModalStyle>,
        container
      )}
    </>
  );
};

export default Modal;
