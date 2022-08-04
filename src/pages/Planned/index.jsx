import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apis } from '../../apis';
import dayjs from 'dayjs';

const Planned = () => {
  const { data } = useQuery(['planned'], () => apis.getReservations().then((res) => res.data));
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onCancel = async (id) => {
    try {
      const res = await apis.cancelReservate(id);
      await queryClient.invalidateQueries('planned');
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <DinningContent>
      {data?.map((d) => (
        <Reservation key={d.id}>
          <h4 onClick={() => navigate(`/stores/${d.storeId}`)}>{d?.storename || '가게이름'}</h4>
          <p className='time'>{dayjs(d?.date).format('YYYY-MM-DD hh:mm') || '시간'}</p>
          <p className='member'>{d?.members || 0} 명</p>
          <button onClick={() => onCancel(d.id)}>취소</button>
        </Reservation>
      ))}
      {/*<Reservation>*/}
      {/*  <h4>{'가게이름'}</h4>*/}
      {/*  <p className='time'>{dayjs(new Date()).format('YYYY-MM-DD hh:mm')}</p>*/}
      {/*  <p className='member'>{0} 명</p>*/}
      {/*  <button>취소</button>*/}
      {/*</Reservation>*/}
      {!data && (
        <div className='empty'>
          <p>방문된 예정이 없습니다.</p>
          <p>캐치테이블을 통해 편리하게 예약해 보세요!</p>
          <Link to='/'>
            <FiSearch />
            레스토랑 둘러보기
          </Link>
        </div>
      )}
    </DinningContent>
  );
};

export default Planned;

export const Reservation = styled.div`
  border: 1px solid #ff3d00;
  padding: 10px 10px;
  margin: 15px 10px;
  border-radius: 5px;

  h4 {
    color: #ff3d00;
  }

  .time {
    font-size: 0.8rem;
    margin: 5px 0;
  }

  .member {
    font-size: 0.9rem;
  }

  button {
    border: 1px solid #ff3d00;
    padding: 3px 22px;
    background: #fff;
    margin-top: 3px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #c8c8c8;
    }
  }
`;

export const DinningContent = styled.div`
  & .empty {
    margin: 3rem 0;
    & p {
      color: #cacaca;
      text-align: center;
    }

    & a {
      margin-top: 2rem;
      justify-content: center;
      font-size: 0.9rem;
      color: #0091ff;
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
`;
