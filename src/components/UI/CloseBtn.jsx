import styled from 'styled-components';

const CloseBtnStyle = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  
  .close-btn__icon {
    display: block;
    position: relative;

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      height: 2px;
      background-color: #666;
      border-radius: 5px;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

const CloseBtn = (props) => {
  return (
    <CloseBtnStyle className='close-btn' onClick={props.onClickHandler}>
      <span className="close-btn__icon" />
      <span className="hidden">{props.text}</span>
    </CloseBtnStyle>
  );
};

export default CloseBtn;