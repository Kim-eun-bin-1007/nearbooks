import { Outlet } from 'react-router-dom';

import { BoroughWrap } from '../../style/Borough';

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
