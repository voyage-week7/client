import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RestaurantCont } from './styles';

const RestaurantItem = ({ storename, description, region, category, launchPrice, dinnerPrice, storeImageUrl }) => {
    const navigate = useNavigate();
    return (
        <RestaurantCont onClick={() => navigate('/stores')}>
            <img src='/images/restaurant_img.jpeg' alt='thumbnail' />
            <div className='detail'>
                <div className='txt'>
                    <h4>스시하루방</h4>
                    <p>각 지역의 재료를 공수해 제주 스타일로 재해석한 스시야</p>
                </div>
                <div className='meta'>
                    <p>스시오마카세 • 경주</p>
                    <p>점심5만원 • 저녁9만원</p>
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
