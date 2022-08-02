import React from 'react';
import { SubTabItem, SubTabMenu } from '../MyDinning';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

const My = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <SubTabMenu>
        <SubTabItem
          active={pathname === '/reservations/my/planned'}
          onClick={() => navigate('/reservations/my/planned')}
        >
          방문예정
        </SubTabItem>
        <SubTabItem active={pathname === '/reservations/my/done'} onClick={() => navigate('/reservations/my/done')}>
          방문완료
        </SubTabItem>
        <SubTabItem active={pathname === '/reservations/my/cancel'} onClick={() => navigate('/reservations/my/cancel')}>
          취소/노쇼
        </SubTabItem>
      </SubTabMenu>
      <Outlet />
    </>
  );
};

export default My;
