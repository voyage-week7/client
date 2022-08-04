import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PhotoList from '../../components/PhotoList';
import Review from '../../components/Review';
import ReviewWrite from '../../components/ReviewWrite';
import { GrayBackground, Tabmenu } from '../Profile';
import { SearchHeader } from '../Search';
import { apis } from '../../apis';
import Spinner from '../../components/Spinner';
import ImageSwiper from '../../components/Swiper/iindex';
import { utils } from '../../utils';
import { timeTable } from '../../components/RestaurantItem';
import ReservationModal from '../../components/ReservationModal';
import dayjs from 'dayjs';

const Stores = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const { Rid } = useParams();
  const today = new Date();
  const day = ['일', '월', '화', '수', '목', '금', '토'];
  const { data, isLoading, isError } = useQuery(['store', Rid], () => apis.getStoreDetail(Rid).then((res) => res.data));
  const [times, setTimes] = useState([
    timeTable[utils.getRandom(timeTable.length - 1)],
    timeTable[utils.getRandom(timeTable.length - 1)],
    timeTable[utils.getRandom(timeTable.length - 1)],
  ]);

  const [modalShow, setModalShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  if (isLoading || isError) {
    return <Spinner />;
  }

  const onReservate = async () => {
    const [hour, min] = selectedData.time.split(':');
    const day = dayjs(new Date()).add(1, 'day').set('hour', hour).set('minute', min).format('YYYY-MM-DD hh:mm');
    try {
      const res = await apis.reservate(Rid, { day, members: 2 }).then((res) => res.data);

      alert(res.message);
      setModalShow(false);
    } catch (e) {
      console.log(e);
    }
  };

  const onSelectTime = (time) => {
    setSelectedData({ time, storename: data.storename, category: data.category });
    setModalShow(true);
  };

  return (
    <Reservcontainer>
      {tab === 0 ? (
        <div style={{ minWidth: '480px' }}>
          <div className='img' style={{ overflow: 'hidden' }}>
            <ImageSwiper data={data.storeImages} />
          </div>
          <span className='location'></span>

          <div className='section'>
            <h3>{data.storename}</h3>
            <span>{data.description}</span>
            <p>{data.category}</p>
            <div className='star'>
              <p className='score'>{data.reviewAvg}</p>
              <p className='count'>({data.reviewCount})</p>
            </div>
            <div className='price'>
              <span>점심 {utils.getRandom(30)}만원</span>
              <span>저녁 {5 + utils.getRandom(40)}만원</span>
            </div>
          </div>
          <GrayBackground height='8px' />
        </div>
      ) : (
        <div style={{ minWidth: '480px' }}>
          <SearchHeader>
            <nav>
              <span onClick={() => navigate(-1)}></span>
              <h3>하쯔오</h3>
            </nav>
          </SearchHeader>
        </div>
      )}
      <Tabmenu margin={tab}>
        <ul>
          {tab === 0 ? (
            <li onClick={() => setTab(0)} className='focus'>
              홈 <p>0</p>
            </li>
          ) : (
            <li
              onClick={() => {
                setTab(0);
                navigate(`/stores/${Rid}`);
              }}
            >
              홈 <p>0</p>
            </li>
          )}
          {tab === 1 ? (
            <li
              onClick={() => {
                setTab(1);
              }}
              className='focus'
            >
              사진<p>0</p>
            </li>
          ) : (
            <li
              onClick={() => {
                setTab(1);
                navigate(`/stores/${Rid}/PhotoList`);
              }}
            >
              사진<p>0</p>
            </li>
          )}
          {tab === 2 ? (
            <li
              onClick={() => {
                setTab(2);
              }}
              className='focus'
            >
              리뷰<p>0</p>
            </li>
          ) : (
            <li
              onClick={() => {
                setTab(2);
                navigate(`/stores/${Rid}/Review`);
              }}
            >
              리뷰<p>0</p>
            </li>
          )}
        </ul>
      </Tabmenu>
      {tab == 0 && (
        <ContentWrapper>
          <Reservation>
            <div>
              <span>내일 ({day[today.getDay() + 1]}) / 2명</span>
            </div>
          </Reservation>
          <ul className='time-table'>
            {times.sort().map((t, idx) => (
              <li key={idx} onClick={() => onSelectTime(t)}>
                {t}
              </li>
            ))}
          </ul>
        </ContentWrapper>
      )}
      <Routes>
        <Route path='/PhotoList' element={<PhotoList />} />
        <Route path='/Review' element={<Review />} />
        <Route path='/ReviewWirte' element={<ReviewWrite />} />
      </Routes>
      {modalShow && (
        <ReservationModal
          modalShow={modalShow}
          setModalShow={setModalShow}
          selectedData={selectedData}
          onSuccess={onReservate}
        />
      )}
    </Reservcontainer>
  );
};

export default Stores;

const ContentWrapper = styled.div`
  margin-bottom: 10rem;

  .time-table {
    margin-top: 13px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    text-align: center;

    li {
      background-color: #ff3d00;
      padding: 12px 0 11px;
      color: #fff;
      min-width: 70px;
      width: 33.33333%;
      border-radius: 6px;
      font-size: 13px;
      line-height: 13px;
      letter-spacing: -0.7px;
      cursor: pointer;

      &:hover {
        background-color: #b32f00;
      }
    }
  }
`;

export const Reservcontainer = styled.div`
  min-width: 480px;
  overflow: auto;
  .img {
    position: relative;
    width: 480px;
    height: 320px;
    margin-bottom: 40px;
  }
  .location {
    background-image: url('/images/map_location_icon.svg');
    width: 48px;
    height: 48px;
    display: block;
    position: absolute;
    top: 270px;
    z-index: 999;
    transform: translateY(50%);
    right: 20px;
    cursor: pointer;
  }
  .section {
    padding: 0 20px;
    h3 {
      font-size: 22px;
      margin-bottom: 4px;
      line-height: 26.4px;
      letter-spacing: -1.1px;
      font-weight: 400;
    }
    span {
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.8px;
      font-weight: 400;
      margin-bottom: 6px;
      display: block;
    }
    p {
      font-size: 13px;
      line-height: 13px;
      letter-spacing: -0.7px;
      color: #666;
      font-weight: 400;
    }
  }
  .star {
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
      &:before {
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
`;
export const Reservation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  cursor: pointer;
  div {
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
`;
