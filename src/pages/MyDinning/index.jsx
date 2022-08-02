import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const MyDinning = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div>
      <Title>
        <h2>마이 다이닝</h2>
      </Title>
      <TabMenu>
        <TabItem tabActive={/reservations\/my/.test(pathname)} onClick={() => navigate('/reservations/my/planned')}>
          나의 예약
        </TabItem>
        <TabItem tabActive={pathname === '/reservations/alert'} onClick={() => navigate('/reservations/alert')}>
          나의 알림
        </TabItem>
      </TabMenu>
      <Outlet />
    </div>
  );
};

export default MyDinning;

export const Title = styled.header`
  padding: 15px;
  & h2 {
    font-size: 20px;
  }
`;

export const TabMenu = styled.ul`
  display: flex;
  position: relative;
`;

export const TabItem = styled.li`
  cursor: pointer;
  flex: 1;
  text-align: center;
  padding: 5px 0;
  border-bottom: ${({ tabActive }) => (tabActive ? '2px solid black' : '2px solid #f1f1f1')};
`;

export const SubTabMenu = styled.ul`
  display: flex;
  gap: 5px;
  margin: 1.5rem 1rem;
  cursor: pointer;
`;

export const SubTabItem = styled.li`
  display: block;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 15px;
  outline: ${({ active }) => (active ? '1px solid black' : '')};
`;
