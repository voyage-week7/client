import React from 'react';
import { ScrollContainer } from '../Circle/styles';
import { MainTitle, SubTitle } from '../Title/styles';
import { ShowAll, SquereFooter, SquereItem, TitleHeader } from './styles';
import img from './img/18511_21121720552264341.png'
const Benefits = () => {
    return (
        <div style={{ paddingBottom: "45px" }}>
            <TitleHeader>
                <div>
                    <MainTitle>놓치면 안되는 혜택 가득!</MainTitle>
                    <SubTitle>미식생활을 더욱 스마트하게 즐겨보세요</SubTitle>
                </div>
                <p className='all'>전체보기</p>
            </TitleHeader>
            <ScrollContainer>
                <div className="scroll-container">
                    <SquereItem>
                        <div className="img">
                            <img src={`${img}`} />
                            <span>2주년 기념 10% 할인</span>
                        </div>
                        <SquereFooter>
                            <h3>비스트로 수방</h3>
                            <div className="meta">
                                <span className='score'>4.5</span>
                                <span className='tags'>다이닝바 • 명동</span>
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

export default Benefits;