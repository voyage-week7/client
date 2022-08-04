import React from 'react';
import { SquereFooter, SquereItem, TitleHeader, ShowAll } from '../Benefits/styles';
import { ScrollContainer } from '../Circle/styles';
import { MainTitle, SubTitle } from '../Title/styles';
import img from './img/30977_2272719325424282.jpeg'

const NewOpen = () => {
    return (
        <div style={{ paddingBottom: "45px" }}>
            <TitleHeader>
                <div>
                    <MainTitle>신규 예약 오픈!</MainTitle>
                    <SubTitle>누구보다 먼저 편리하게 예약해보세요.</SubTitle>
                </div>
                <p className="all">전체보기</p>
            </TitleHeader>
            <ScrollContainer>
                <div className="scroll-container">
                    <SquereItem>
                        <div className="img">
                            <img src={`${img}`} />
                        </div>
                        <SquereFooter>
                            <h3>샐러드보투아</h3>
                            <div className="meta">
                                <span className="score">4.4</span>
                                <span className='tags'>와인 • 석촌</span>
                            </div>
                        </SquereFooter>
                    </SquereItem>
                    <SquereItem>
                        <div className="img">
                            <img src={`${img}`} />
                        </div>
                        <SquereFooter>
                            <h3>샐러드보투아</h3>
                            <div className="meta">
                                <span className="score">4.4</span>
                                <span className='tags'>와인 • 석촌</span>
                            </div>
                        </SquereFooter>
                    </SquereItem>
                    <SquereItem>
                        <div className="img">
                            <img src={`${img}`} />
                        </div>
                        <SquereFooter>
                            <h3>샐러드보투아</h3>
                            <div className="meta">
                                <span className="score">4.4</span>
                                <span className='tags'>와인 • 석촌</span>
                            </div>
                        </SquereFooter>
                    </SquereItem>
                    <SquereItem>
                        <div className="img">
                            <img src={`${img}`} />
                        </div>
                        <SquereFooter>
                            <h3>샐러드보투아</h3>
                            <div className="meta">
                                <span className="score">4.4</span>
                                <span className='tags'>와인 • 석촌</span>
                            </div>
                        </SquereFooter>
                    </SquereItem>
                    <SquereItem>
                        <div className="img">
                            <img src={`${img}`} />
                        </div>
                        <SquereFooter>
                            <h3>샐러드보투아</h3>
                            <div className="meta">
                                <span className="score">4.4</span>
                                <span className='tags'>와인 • 석촌</span>
                            </div>
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

export default NewOpen;