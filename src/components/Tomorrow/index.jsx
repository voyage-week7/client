import React from 'react';
import { ShowAll, SquereFooter, SquereItem, TitleHeader } from '../Benefits/styles';
import { ScrollContainer } from '../Circle/styles';
import { MainTitle } from '../Title/styles';
import img from './img/930_19112718292994844.jpeg'

const Tomorrow = () => {
    return (
        <div style={{ paddingBottom: "45px" }}>
            <TitleHeader style={{ marginBottom: "15px" }}>
                <div>
                    <MainTitle>내일 예약 가능한 레스토랑</MainTitle>
                </div>
                <p className="all">전체보기</p>
            </TitleHeader>
            <ScrollContainer>
                <div className="scroll-container">
                    <SquereItem style={{ width: "250px" }}>
                        <div className="tomorrow-img">
                            <img src={`${img}`} />
                        </div>
                        <SquereFooter>
                            <h3>뚝심한우 센터원점</h3>
                            <div className="meta">
                                <span className="score">4.5</span>
                                <span className="tags">소고기구이 • 을지로</span>
                            </div>
                            <ul className="time-table">
                                <li>오후 6:30</li>
                                <li>오후 7:00</li>
                                <li>오후 7:30</li>
                            </ul>
                        </SquereFooter>
                    </SquereItem>
                    <ShowAll>
                        <div className="circle"></div>
                        <p>전체보기</p>
                    </ShowAll>
                </div>
            </ScrollContainer>
        </div>
    );
};

export default Tomorrow;