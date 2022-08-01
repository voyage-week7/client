import React from 'react';
import { ScrollContainer } from '../Circle/styles';
import { MainTitle, SubTitle } from '../Title/styles';
import { RealReviewFooter, RealReviewHeader, RealReviewCont, RealReviewItem } from './styles';

const RealReview = () => {
    return (
        <div style={{ paddingBottom: "45px" }}>
            <MainTitle>유저들의 리얼리뷰 Pick</MainTitle>
            <SubTitle>방문자들이 남긴 솔직한 리뷰를 만나보세요</SubTitle>
            <ScrollContainer style={{ paddingBottom: "14px" }}>
                <div className="scroll-container">
                    <RealReviewItem>
                        <RealReviewHeader>
                            <div className='user'>
                                <span></span>
                                <p>성공한 마스터</p>
                            </div>
                            <div className="date">
                                <p>최근 방문일</p>
                                <p>2022.07.08</p>
                            </div>
                        </RealReviewHeader>
                        <RealReviewCont>
                            <div className="text">
                                <h3>왜 예약하기 <br />힘든지 알겠어요</h3>
                                <p>절대 이 가격에 나올 수 없는 원물들과 기가 막힌 숙성!</p>
                            </div>
                        </RealReviewCont>
                        <RealReviewFooter>
                            <h3>성수오오</h3>
                            <div className="meta">
                                <span className="score">
                                    <span>5.0</span>
                                    <span className='count'>(8)</span>
                                </span>
                                <span className="tag">다이닝바 • 성수</span>
                            </div>
                        </RealReviewFooter>
                    </RealReviewItem>
                </div>
            </ScrollContainer >
        </div >
    );
};

export default RealReview;