import React from 'react';
import { Circle, CircleItem } from './styles';
import { MainTitle } from '../Title/styles';
import { useNavigate } from 'react-router-dom';

const BestCircle = () => {
    const best_list = [
        {
            name: "스시 오마카세",
            img: "/images/best_sushi_omakase.jpeg"
        },
        {
            name: "한우 오마카세",
            img: "/images/best_hanwoo_omakase.jpeg"
        },
        {
            name: "다이닝바",
            img: "/images/best_diningbar.png"
        },
        {
            name: "소고기 구이",
            img: "/images/best_beef.jpeg"
        },
        {
            name: "스테이크",
            img: "/images/best_steak.jpeg"
        },
        {
            name: "한식",
            img: "/images/best_korean_food.jpeg"
        },
        {
            name: "이탈리안",
            img: "/images/best_italian.jpeg"
        },
        {
            name: "파스타",
            img: "/images/best_pasta.jpeg"
        },
        {
            name: "일식",
            img: "/images/best_japanese.jpeg"
        },
        {
            name: "프렌치",
            img: "/images/best_french.jpeg"
        },
        {
            name: "브런치",
            img: "/images/best_brunch.jpeg"
        },
        {
            name: "중식",
            img: "/images/best_chinese_food.jpeg"
        },
    ]
    const navigate = useNavigate();
    return (
        <Circle>
            <div>
                <MainTitle style={{ paddingBottom: "15px" }}>음식종류별 BEST</MainTitle>
                <div className='scroll'>
                    <div className='scroll-container'>
                        {best_list.map((item, index) => (
                            <div className='scroll-item' key={index}>
                                <CircleItem img={item.img} />
                                <span onClick={() => navigate(`/search`)}>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Circle>
    );
};

export default BestCircle;