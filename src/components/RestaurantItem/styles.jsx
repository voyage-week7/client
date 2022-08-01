import styled from 'styled-components';

export const RestaurantCont = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    .img {
        width: 78px;
        height: 104px;
        border-radius: 4px;
        background-image: url('/images/restaurant_img.jpeg');
        background-size: cover;
    }
    .detail {
        font-size:11px;
        line-height: 15px;
        letter-spacing: -0.6px;
        display: flex;
        flex-direction: column;
        flex: 1;
        cursor: default;
        .txt {
            margin-bottom: 8px;
            h4 {
                font-size: 20px;
                margin-bottom: 3px;
                letter-spacing: -1px;
                line-height: 28px;
            }
        }
        .meta {
            color: #aaa;
            p{
                margin-bottom: 5px;
                line-height: 11px;
            }
        }
    }
    .time-table {
        margin-top: 13px;
        display: flex;
        flex-direction: row;
        gap: 5px;
        text-align: center;
        li{
            background-color: #ff3d00;
            padding: 12px 0 11px;
            color: #fff;
            min-width: 70px;
            width: 33.33333%;
            border-radius: 6px;
            font-size: 13px;
            line-height: 13px;
            letter-spacing: -0.7px;
            cursor: pointer;
        }
    }
`