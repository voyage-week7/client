import React from 'react';
import Icon from './img/shortcut_date.svg'
import { MainMenuItem } from './styles';

const MenuItem = () => {
    return (
        <MainMenuItem>
            <img src={Icon} alt="" />
            <div className='label'>신규</div>
            <p>오마카세</p>
        </MainMenuItem>
    );
};

export default MenuItem;