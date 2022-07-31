import React from 'react';
import { SquereFooter, SquereItem, TitleHeader, ShowAll } from '../Benefits/styles';
import { ScrollContainer } from '../Circle/styles';
import { MainTitle, SubTitle } from '../Title/styles';
import img from './img/20039_2142715264286192.jpeg'

const GuidBook = () => {
    return (
        <div style={{ marginBottom: "45px" }}>
            <TitleHeader>
                <div>
                    <MainTitle>가이드북 선정 레스토랑</MainTitle>
                    <SubTitle>명성에 걸맞은 감동을 맛보세요</SubTitle>
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
                            <h3>알고리즘</h3>
                            <div className="meta">
                                <span className="score">4.5</span>
                                <span className="tags">퓨전,컨템포러리 • 도산공원</span>
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

export default GuidBook;