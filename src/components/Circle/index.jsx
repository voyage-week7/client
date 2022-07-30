import React from 'react';
import { Circle, CircleItem } from './styles';
import { MainTitle } from '../Title/styles';
const CircleSlide = () => {
    return (
        <Circle>
            <div>
                <MainTitle style={{ marginBottom: "15px" }}>어디로 가시나요?</MainTitle>
                <div className='scroll'>
                    <div className='scroll-container'>
                        <CircleItem>
                            <span>압구정 청담</span>
                        </CircleItem>
                        <CircleItem />
                        <CircleItem />
                        <CircleItem />
                        <CircleItem />
                        <CircleItem />
                        <CircleItem />
                        <CircleItem />
                        <CircleItem />
                        <CircleItem />
                    </div>
                </div>
            </div>
        </Circle>
    );
};

export default CircleSlide;