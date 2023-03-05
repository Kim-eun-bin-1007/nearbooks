import styled from 'styled-components';

const Loading = styled.div`
  position: relative;
  width: 100%;
  height: var(--100vh, 100vh);

  .loading {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    padding: 0 15px;
    width: 100%;
    text-align: center;

    &__img {
      display: block;
      margin: 0 auto;
      width: 40px;
      height: 40px;
      animation: spinner 0.6s ease-out infinite;
    }

    &__text {
      margin-top: 20px;
      color: #666;
      font-size: 14px;
      line-height: 1.5;
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(20deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 768px) {
    .loading__text {
      font-size: 16px;
    }
  }
`;

const LoadingSpinner = (props) => {
  return (
    <Loading>
      <div className='loading'>
        <img src="/assets/loading-spinner.png" alt="로딩중" className='loading__img' />
        {props.text && <p className='loading__text'>{props.text}</p>}
      </div>
    </Loading>
  );
};

export default LoadingSpinner;