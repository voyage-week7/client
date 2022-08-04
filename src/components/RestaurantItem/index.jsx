import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RestaurantCont } from './styles';
import { utils } from '../../utils';

export const timeTable = ['10:00', '11:00', '12:00', '13:30', '14:30', '15:30'];

const RestaurantItem = ({ store }) => {
  const navigate = useNavigate();
  const [times, setTimes] = useState([
    timeTable[utils.getRandom(timeTable.length - 1)],
    timeTable[utils.getRandom(timeTable.length - 1)],
    timeTable[utils.getRandom(timeTable.length - 1)],
  ]);
  return (
    <RestaurantCont onClick={() => navigate(`/stores/${store.id}`)}>
      <img src={store.storeImages[0].imagePath} alt='thumbnail' />
      <div className='detail'>
        <div className='txt'>
          <h4>{store.storename}</h4>
          <p>{store.description}</p>
        </div>
        <div className='meta'>
          <p>{store.region}</p>
          <p>
            점심 {store.launchPrice} • 저녁{store.dinnerPrice}
          </p>
        </div>
        <ul className='time-table'>
          {times.sort().map((t) => (
            <li>{t}</li>
          ))}
        </ul>
      </div>
    </RestaurantCont>
  );
};

export default RestaurantItem;
