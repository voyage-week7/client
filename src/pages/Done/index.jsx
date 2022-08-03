import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { DinningContent } from '../Planned';

const Done = () => {
  return (
    <DinningContent>
      <div className='empty'>
        <p>완료한 예정이 없습니다.</p>
        <p>캐치테이블을 통해 편리하게 예약해 보세요!</p>
        <Link to='/'>
          <FiSearch />
          레스토랑 둘러보기
        </Link>
      </div>
    </DinningContent>
  );
};

export default Done;
