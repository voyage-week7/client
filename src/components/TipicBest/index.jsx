import React from 'react';
import { ScrollContainer } from '../Circle/styles';
import { MainTitle } from '../Title/styles';
import img from './img/comm_227611494344496.webp'
import { TopicItem } from './styles';

const TopicBest = () => {
    return (
        <div style={{ paddingBottom: "45px" }}>
            <MainTitle style={{ marginBottom: "15px" }}>상황별·주제별 BEST</MainTitle>
            <ScrollContainer style={{ padding: "0 20px" }}>
                <TopicItem>
                    <img src={`${img}`} />
                </TopicItem>
                <TopicItem>
                    <img src={`${img}`} />
                </TopicItem>
                <TopicItem>
                    <img src={`${img}`} />
                </TopicItem>
                <TopicItem>
                    <img src={`${img}`} />
                </TopicItem>
                <TopicItem>
                    <img src={`${img}`} />
                </TopicItem>
            </ScrollContainer>
        </div>
    );
};

export default TopicBest;