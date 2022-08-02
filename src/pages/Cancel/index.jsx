import React from 'react';
import { DinningContent } from '../Planned';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Cancel = () => {
  return (
    <DinningContent>
      <div className='empty'>
        <p>취소한 예정이 없습니다.</p>
      </div>
    </DinningContent>
  );
};

export default Cancel;
