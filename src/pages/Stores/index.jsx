import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PhotoList from '../../components/PhotoList';
import Review from '../../components/Review';
import { GrayBackground, Tabmenu } from '../Profile';
import { SearchHeader } from '../Search';

const Stores = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const { Rid } = useParams();
  const today = new Date();
  const day = ['일', '월', '화', '수', '목', '금', '토',]
  return (
    <Reservcontainer>
      {tab === 0 ? (
        <>
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
        </>
      ) : (
        <>
          <SearchHeader>
            <nav>
              <span onClick={() => navigate(-1)}></span>
              <h3>하쯔오</h3>
            </nav>
          </SearchHeader>
        </>
      )
      }
      <Tabmenu margin={tab}>
        <ul>
          {tab === 0 ? (
            <li onClick={() => setTab(0)} className='focus'>
              홈 <p>0</p>
            </li>
          ) : (
            <li onClick={() => {
              setTab(0);
              navigate(`/stores/${Rid}`)
            }}>
              홈 <p>0</p>
            </li>
          )}
          {tab === 1 ? (
            <li onClick={() => {
              setTab(1);
            }} className='focus'>
              사진<p>0</p>
            </li>
          ) : (
            <li onClick={() => {
              setTab(1);
              navigate(`/stores/${Rid}/PhotoList`)
            }}>
              사진<p>0</p>
            </li>
          )}
          {tab === 2 ? (
            <li onClick={() => {
              setTab(2);
            }} className='focus'>
              리뷰<p>0</p>
            </li>
          ) : (
            <li onClick={() => {
              setTab(2);
              navigate(`/stores/${Rid}/Review`)
            }}>
              리뷰<p>0</p>
            </li>
          )}
        </ul>
      </Tabmenu>
      {tab == 0 && <Reservation >
        <div>
          <span>내일 ({day[(today.getDay()) + 1]}) / 2명</span>
          <p></p>
        </div>
      </Reservation>}
      <Routes>
        <Route path='/PhotoList' element={<PhotoList />} />
        <Route path='/Review' element={<Review />} />
      </Routes>
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
    margin-bottom: 16px;
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
export const Reservation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  cursor: pointer;
  div{
    border: 1px solid #d5d5d5;
    border-radius: 6px;
    background-color: #fff;
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 14px;
      letter-spacing: -0.7px;
      line-height: 46px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      &:before {
        content: '';
        background-image: url('/images/calendar_icon.svg');
        display: block;
        width: 24px;
        height: 24px;
      }
    }
    p {
      background-image: url('/images/arrow_bottom.svg');
      width: 16px;
      height: 16px;
      display: block;
    }
  }
`