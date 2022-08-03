import React from 'react';
import { SquereItem } from '../Benefits/styles';
import { ScrollContainer } from '../Circle/styles';
import { StickyBottom } from '../Modal/styles';
import { ReviewContainer, ReviewImg } from './stylex';

const Review = () => {
    return (
        <ReviewContainer>
            <div className="header">
                <div className="user_info">
                    <img src="/images/profile_default.png" alt="" />
                    <h4>최민경*</h4>
                </div>
                <div className="review_meta">
                    <p>2022.08.03</p>
                    <span>5.0</span>
                </div>
            </div>
            <ScrollContainer style={{ paddingBottom: '14px' }}>
                <div className="scroll-container" >
                    <ReviewImg>
                        <li><img src="/images/review_img.jpeg" alt="" /></li>
                        <li><img src="/images/review_img.jpeg" alt="" /></li>
                        <li><img src="/images/review_img.jpeg" alt="" /></li>
                        <li><img src="/images/review_img.jpeg" alt="" /></li>
                        <li><img src="/images/review_img.jpeg" alt="" /></li>
                        <li><img src="/images/review_img.jpeg" alt="" /></li>
                    </ReviewImg>
                </div>
            </ScrollContainer>
            <div className="review_post">
                <h4>예약 부담 없는 알찬 구성의 오마카세</h4>
                <p>
                    갑자기 오마카세가 먹고 싶어서 당일 예약 후 혼자 방문함.
                    갑자기 오마카세가 먹고 싶어서 당일 예약 후 혼자 방문함.
                    갑자기 오마카세가 먹고 싶어서 당일 예약 후 혼자 방문함.
                    갑자기 오마카세가 먹고 싶어서 당일 예약 후 혼자 방문함.
                    갑자기 오마카세가 먹고 싶어서 당일 예약 후 혼자 방문함.
                </p>
            </div>
            <StickyBottom>
                <div className='reservation'>
                    <div className="leftbutton">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <button>예약하기</button>
                </div>
            </StickyBottom>
        </ReviewContainer>

    );
};

export default Review;