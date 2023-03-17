import styled from 'styled-components';

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
    min-height: 280px;
    max-height: 80%;
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
  return (
    <ModalStyle>
      <div className="modal">{props.children}</div>
    </ModalStyle>
  );
};

export default Modal;