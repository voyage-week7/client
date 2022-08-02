import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MyDinning = () => {
  const [tabActive, setTabActive] = useState('나의 예약');
  return (
    <div>
      <Title>
        <h2>마이 다이닝</h2>
      </Title>
      <TabMenu>
        <TabItem tabActive={tabActive === '나의 예약'} onClick={() => setTabActive('나의 예약')}>
          나의 예약
        </TabItem>
        <TabItem tabActive={tabActive === '나의 알림'} onClick={() => setTabActive('나의 알림')}>
          나의 알림
        </TabItem>
      </TabMenu>
      <SubTabMenu>
        <SubTabItem active={true}>방문예정</SubTabItem>
        <SubTabItem>방문완료</SubTabItem>
        <SubTabItem>취소/노쇼</SubTabItem>
      </SubTabMenu>
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
  border: ${({ active }) => (active ? '1px solid black' : '')};
`;
