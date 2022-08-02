import React, { useState } from 'react';
import styled from 'styled-components';
import { GrayBackground, Tabmenu } from '../Profile';

const Stores = ({ storename, description, region, category, launchPrice, dinnerPrice, storeImageUrl }) => {
  const [tab, setTab] = useState(0);
  return (
    <Reservcontainer>
      <div className="img"></div>
      <div className="section">
        <h3>하쯔호</h3>
        <span>알찬 구성의 미들급 스시야</span>
        <p>스시오마카세 • 여의도</p>
        <div className='star'>
          <p className='score'>4.6</p>
          <p className='count'>(94)</p>
        </div>
        <div className="price">
          <span>점심 6만원</span>
          <span>저녁 16만원</span>
        </div>
      </div>
      <GrayBackground height="8px" />
      <Tabmenu>
        <ul>
          {tab === 0 ? (
            <li onClick={() => setTab(0)} className='focus'>
              홈 <p>0</p>
            </li>
          ) : (
            <li onClick={() => setTab(0)}>
              홈 <p>0</p>
            </li>
          )}
          {tab === 1 ? (
            <li onClick={() => setTab(1)} className='focus'>
              사진<p>0</p>
            </li>
          ) : (
            <li onClick={() => setTab(1)}>
              사진<p>0</p>
            </li>
          )}
          {tab === 2 ? (
            <li onClick={() => setTab(2)} className='focus'>
              리뷰<p>0</p>
            </li>
          ) : (
            <li onClick={() => setTab(2)}>
              리뷰<p>0</p>
            </li>
          )}
        </ul>
      </Tabmenu>
    </Reservcontainer>
  );
};

export default Stores;

export const Reservcontainer = styled.div`
  .img {
    width: 480px;
    height: 320px;
    background-color: coral;
    margin-bottom: 40px;
  }
  .section {
    padding: 0 20px;
    h3{
      font-size: 22px;
      margin-bottom: 4px;
      line-height: 26.4px;
      letter-spacing: -1.1px;
      font-weight: 400;
    }
    span{
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.8px;
      font-weight: 400;
      margin-bottom: 6px;
      display: block;
    }
    p{
      font-size:13px;
      line-height: 13px;
      letter-spacing: -0.7px;
      color: #666;
      font-weight: 400;
    }
  }
  .star{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding: 20px 0 8px 0;
    .score {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -0.7px;
      font-weight: 800;
      display: flex;
      flex-direction: row;
      gap: 5px;
      color: #000;
      &:before{
      content: '';
      display: block;
      width: 14px;
      height: 14px;
      background-image: url('/images/star.svg');
      background-size: cover;
    }
    }
    .count {
      font-size: 13px;
      color: #999;
    }
  }
  .price {
    display: flex;
    flex-direction: row;
    gap: 20px;
    span {
      font-size: 14px;
      color: #333;
      letter-spacing: -0.7px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;
    &:before {
      content: '';
      display: block;
      width: 19px;
      height: 19px;
      background-image: url('/images/lunch.svg');
    }
    &:last-child:before {
      background-image: url('/images/dinner.svg');
    }
    }
  }
`