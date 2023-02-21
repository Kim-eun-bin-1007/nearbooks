import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

const BoroughWrap = styled.div`
  padding-top: 60px;
`;

function BoroughLayout() {
  return (
    <>
      <BoroughWrap>
        <Outlet />
      </BoroughWrap>
    </>
  );
}

export default BoroughLayout;
