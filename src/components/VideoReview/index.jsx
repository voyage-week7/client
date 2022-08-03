import React from 'react';
import { ScrollContainer } from '../Circle/styles';
import { MainTitle, SubTitle } from '../Title/styles';
import { VideoItem } from './styles';

const VideoReveiw = () => {
    return (
        <div style={{ paddingBottom: "45px" }}>
            <MainTitle>현장감 넘치는 영상리뷰</MainTitle>
            <SubTitle>랜선으로 미리 경험하고 선택하세요</SubTitle>
            <ScrollContainer>
                <div className="scroll-container">
                    <VideoItem></VideoItem>
                    <VideoItem></VideoItem>
                    <VideoItem></VideoItem>
                    <VideoItem></VideoItem>
                    <VideoItem></VideoItem>
                </div>
            </ScrollContainer>
        </div>
    );
};

export default VideoReveiw;