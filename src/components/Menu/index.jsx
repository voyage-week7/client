import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainMenu, MainMenuItem } from './styles';

const Menu = () => {
    const menu_list = [
        {
            title: "오마카세",
            img: "/images/shortcut_omakase.svg"
        },
        {
            title: "우마카세",
            img: "/images/shortcut_umakase.svg"
        },
        {
            title: "가이드북",
            img: "/images/shortcut_guidebook.svg"
        },
        {
            title: "콜키지프리",
            img: "/images/shortcut_corkagefree.svg"
        },
        {
            title: "이달의혜택",
            img: "/images/shortcut_ticket.svg"
        },
        {
            title: "회식예약",
            img: "/images/shortcut_teamdinner-v2.svg"
        },
        {
            title: "인기레스토랑",
            img: "/images/shortcut_popular.svg"
        },
        {
            title: "뷰맛집",
            img: "/images/shortcut_view.svg"
        },
        {
            title: "VIP추천",
            img: "/images/shortcut_vvip.svg"
        },
        {
            title: "데이트코스",
            img: "/images/shortcut_date.svg"
        },
    ]
    const navigate = useNavigate();
    return (
        <MainMenu>
            <div>
                {menu_list.map((item, index) => (
                    <div key={index}>
                        <MainMenuItem onClick={() => navigate(`/search`)}>
                            <img src={item.img} alt="" />
                            <div className='label'>신규</div>
                            <p>{item.title}</p>
                        </MainMenuItem>
                    </div>
                ))}
            </div>
        </MainMenu>
    );
};

export default Menu;