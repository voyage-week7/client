import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RestaurantCont } from './styles';

const RestaurantItem = ({ storename, description, region, category, launchPrice, dinnerPrice, storeImageUrl, id }) => {
    const navigate = useNavigate();
    return (
        <RestaurantCont onClick={() => navigate(`/stores/${id}`)}>
            <img src='/images/restaurant_img.jpeg' alt='thumbnail' />
            <div className='detail'>
                <div className='txt'>
                    <h4>{storename}</h4>
                    <p>{description}</p>
                </div>
                <div className='meta'>
                    <p>{region}</p>
                    <p>점심 {launchPrice} • 저녁{dinnerPrice}</p>
                </div>
                <ul className='time-table'>
                    <li>오후 1:30</li>
                    <li>오후 1:30</li>
                    <li>오후 1:30</li>
                </ul>
            </div>
        </RestaurantCont>
    );
};

export default RestaurantItem;
