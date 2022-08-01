import React from 'react';
import { Circle, CircleItem, ScrollContainer } from './styles';
import { MainTitle } from '../Title/styles';
import { useNavigate } from 'react-router-dom';
const CircleSlide = () => {
    const location_list = [
        {
            title: '',
            img: '/images/location.svg'
        },
        {
            title: '압구정 청담',
            img: '/images/location_apgujeong.jpeg'
        },
        {
            title: '이태원 한남',
            img: '/images/location_itaewon.jpeg'
        },
        {
            title: '부산',
            img: '/images/location_busan.jpeg'
        },
        {
            title: '성수',
            img: '/images/location_sungsoo.jpeg'
        },
        {
            title: '광화문 종로',
            img: '/images/location_gwanghwamun.jpeg'
        },
        {
            title: '강남 역삼',
            img: '/images/location_gangnam.jpeg'
        },
        {
            title: '합정',
            img: '/images/location_hapjeong,mangwon.png'
        },
        {
            title: '홍대 신촌',
            img: '/images/location_hongdae.jpeg'
        },
        {
            title: '여의도',
            img: '/images/location_yeouido.jpeg'
        },
        {
            title: '북촌 삼청',
            img: '/images/location_bukchon.jpeg'
        },
        {
            title: '을지로',
            img: '/images/location_euljiro.jpeg'
        },
        {
            title: '제주',
            img: '/images/location_jeju.jpeg'
        },
        {
            title: '서래마을',
            img: '/images/location_surraevillage.jpeg'
        },
        {
            title: '대구',
            img: '/images/location_daegu.png'
        },
    ]

    const navigate = useNavigate();
    return (
        <Circle>
            <div style={{ paddingTop: "24px" }}>
                <MainTitle style={{ paddingBottom: "15px" }}>어디로 가시나요?</MainTitle>
                <ScrollContainer>
                    <div className='scroll-container'>
                        {location_list.map(item => (
                            <CircleItem width="60px" height="60px" img={item.img}
                                onClick={() => navigate(`/search`)}>
                                <span>{item.title}</span>
                            </CircleItem>
                        ))}
                    </div>
                </ScrollContainer>
            </div>
        </Circle>
    );
};

export default CircleSlide;