import styled from 'styled-components';

export const HomeWrap = styled.div`
  min-height: 100vh;
  // background-color: #fdf1ed;
`;

export const InfoType = styled.ul`
  padding: 0 15px;
  padding-top: 60px;

  .info-type {
    &__item {
      margin-bottom: 40px;
      background-color: #fdf1ed;
      border-radius: 5px;
    }
    
    &__title {
      padding: 30px 0;
      text-align: center;
    }
  }
`;