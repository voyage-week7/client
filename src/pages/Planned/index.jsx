import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Planned = () => {
  return (
    <DinningContent>
      <div className='empty'>
        <p>방문된 예정이 없습니다.</p>
        <p>캐치테이블을 통해 편리하게 예약해 보세요!</p>
        <Link to='/'>
          <FiSearch />
          레스토랑 둘러보기
        </Link>
      </div>
    </DinningContent>
  );
};

export default Planned;

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
