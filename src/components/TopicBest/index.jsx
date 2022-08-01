import React from 'react';
import { ScrollContainer } from '../Circle/styles';
import { MainTitle } from '../Title/styles';
import { TopicItem } from './styles';

const TopicBest = () => {
    const topic_list = [
        {
            img: "/images/comm_dining.webp"
        },
        {
            img: "/images/comm_traditional.jpeg"
        },
        {
            img: "/images/comm_subway.webp"
        },
        {
            img: "/images/comm_adult.jpeg"
        },
        {
            img: "/images/comm_pet.jpeg"
        },
        {
            img: "/images/comm_kids.jpeg"
        },
        {
            img: "/images/comm_wedding.jpeg"
        },
        {
            img: "/images/comm_fire.webp"
        },
        {
            img: "/images/comm_second.webp"
        },
    ]
    return (
        <div style={{ paddingBottom: "45px" }}>
            <MainTitle style={{ marginBottom: "15px" }}>상황별·주제별 BEST</MainTitle>
            <ScrollContainer style={{ padding: "0 20px" }}>
                {topic_list.map((item, index) => (
                    <TopicItem key={index}>
                        <img src={item.img} />
                    </TopicItem>
                ))}
            </ScrollContainer>
        </div>
    );
};

export default TopicBest;