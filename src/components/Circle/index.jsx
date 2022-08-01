import React from 'react';
import { Circle, CircleItem, ScrollContainer } from './styles';
import { MainTitle } from '../Title/styles';
const CircleSlide = () => {
    return (
        <Circle>
            <div>
                <MainTitle style={{ paddingBottom: "15px" }}>어디로 가시나요?</MainTitle>
                <ScrollContainer>
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
                </ScrollContainer>
            </div>
        </Circle>
    );
};

export default CircleSlide;