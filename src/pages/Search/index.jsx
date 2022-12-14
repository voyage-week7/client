import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RestaurantItem from '../../components/RestaurantItem';
import { GrayBackground } from '../Profile';
import { useQuery } from '@tanstack/react-query';
import { apis } from '../../apis';
import Modal from '../../components/Modal';
import Spinner from '../../components/Spinner';

const Search = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const { data, isError, isLoading } = useQuery(['stores'], () => apis.getStores().then((res) => res.data));
  const today = new Date();
  const day = ['일', '월', '화', '수', '목', '금', '토'];

  if (isLoading || isError) {
    return <Spinner />;
  }

  return (
    <>
      <SearchHeader>
        <nav>
          <span onClick={() => navigate(-1)}></span>
          <h3>오마카세</h3>
        </nav>
        <div className='date-time'>
          <span>
            <p>오늘({day[today.getDay()]})</p>
            <p>/</p>
            <p>2명</p>
            <p>/</p>
            <p>오후 7:00</p>
          </span>
          <p className='arrow'></p>
        </div>
        <div className='filter-list'>
          <ul className='filter-icon'>
            <li></li>
            <li onClick={() => setOpen(true)}></li>
          </ul>
          <div className='filter'>
            <ul>
              <li>내 주변</li>
              <li>지역</li>
              <li>음식종류</li>
            </ul>
          </div>
        </div>
      </SearchHeader>
      <SearchMain>
        <GrayBackground height='8px' />
        <div className='nav'>
          <span>
            283개<p>의 레스토랑</p>
          </span>
          <p className='toggle'>추천순</p>
        </div>
        {data?.map((d, idx) => (
          <RestaurantItem key={idx} store={d} />
        ))}
      </SearchMain>
      <Modal isOpen={isOpen} />
    </>
  );
};

export default Search;

export const SearchHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 480px;
  width: 100%;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    height: 48px;
    border-bottom: 1px solid #eee;
    span {
      background-image: url('/images/back_arrow.svg');
      width: 32px;
      height: 32px;
      display: block;
      margin-right: 6px;
      cursor: pointer;
    }
    h3 {
      font-size: 20px;
      letter-spacing: -1px;
      cursor: default;
    }
  }
  .date-time {
    padding: 0 20px;
    height: 48px;
    border-bottom: 1px solid #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      letter-spacing: 0.8px;
      &:before {
        content: '';
        display: block;
        background-image: url('/images/calendar_icon.svg');
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }
    .arrow {
      display: block;
      width: 16px;
      height: 16px;
      background-image: url('/images/arrow_bottom.svg');
    }
  }
  .filter-list {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    .filter-icon {
      display: flex;
      flex-direction: row;
      gap: 8px;
      padding-right: 16px;
      border-right: 1px solid #eee;
      li {
        width: 40px;
        height: 40px;
        min-width: 40px;
        border: 1px solid #d5d5d5;
        border-radius: 8px;
        &:first-child {
          background: url('/images/filter_header_map.svg') no-repeat center;
        }
        &:last-child {
          background: url('/images/filter_header_setting.svg') no-repeat center;
        }
      }
    }
    .filter {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      padding: 0 20px;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        li {
          line-height: 36px;
          height: 36px;
          border-radius: 18px;
          border: 1px solid #d5d5d5;
          font-size: 14px;
          letter-spacing: 0.7px;
          padding: 0 14px;
          margin-right: 8px;
          cursor: pointer;
          flex-shrink: 0;
        }
      }
    }
  }
`;
export const SearchMain = styled.main`
  margin-top: 170px;
  border-bottom: 1px solid #f9f9f9;
  margin-bottom: 20px;
  .nav {
    padding: 16px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    span {
      display: flex;
      flex-direction: row;
      letter-spacing: 0.7px;
      color: #aaa;
      p {
        font-weight: lighter;
      }
    }
    .toggle {
      display: flex;
      gap: 6px;
      align-items: center;
      cursor: pointer;
      &:before {
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        background-image: url('/images/toggle.svg');
      }
      &:after {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('/images/arrow_bottom_black.svg');
      }
    }
  }
`;
