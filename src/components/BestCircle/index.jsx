import React from 'react';
import { Circle, CircleItem } from './styles';
import { MainTitle } from '../Title/styles';

const BestCircle = () => {
    return (
        <Circle>
            <div>
                <MainTitle style={{ marginBottom: "15px" }}>음식종류별 BEST</MainTitle>
                <div className='scroll'>
                    <div className='scroll-container'>
                        <div className='scroll-item'>
                            <CircleItem />
                            <span>스시 오마케세</span>
                        </div>
                        <div className='scroll-item'>
                            <CircleItem />
                            <span>스시 오마케세</span>
                        </div>
                        <div className='scroll-item'>
                            <CircleItem />
                            <span>스시 오마케세</span>
                        </div>
                        <div className='scroll-item'>
                            <CircleItem />
                            <span>스시 오마케세</span>
                        </div>
                        <div className='scroll-item'>
                            <CircleItem />
                            <span>스시 오마케세</span>
                        </div>
                        <div className='scroll-item'>
                            <CircleItem />
                            <span>스시 오마케세</span>
                        </div>
                    </div>
                </div>
            </div>
        </Circle>
    );
};

export default BestCircle;