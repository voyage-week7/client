import styled from 'styled-components'
import mainImg from './img/0727_7.jpeg'

export const RealReviewItem = styled.div`
    background-size: cover;
    width: 200px;
    min-height: 200px;
    margin-right: 10px;
    border-radius: 12px;
    box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
`

export const RealReviewHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    .user{
        display: flex;
        align-items: center;
        flex-direction: row;
        span{
        background-image: url('/images/profile_default.png');
        background-size: cover;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 6px;
    }
    p{
        font-size:13px;
        min-height: 1px;
        flex: 1;
        letter-spacing: -0.7px;
    }
    }
    .date{
        p{
            font-size: 10px;
            text-align: right;
            color: #c8c8c8;
            margin: 0;
            letter-spacing: -0.5px;
            line-height: 14px;
        }
    }
`

export const RealReviewCont = styled.div`
    background-image: url(${mainImg});
    background-size: cover;
    width: 200px;
    height: 200px;
    position: relative;
    .text {
        position: absolute;
        bottom: 0;
        padding: 20px 15px;
        h3{
            margin: 0;
            color: #fff;
            font-size:17px;
            letter-spacing: -0.9px;
            position: relative;
            &:before {
            content: '';
            position: absolute;
            left: 0px;
            top: -1.2em;
            width: 16px;
            height: 14px;
            background: url('/images/quotes.svg');
        }
        }
        p{
            margin: 0;
            font-size:12px;
            color: #fff;
            letter-spacing: -0.6px;
        }
    }
`

export const RealReviewFooter = styled.div`
    background-color: #fff;
    padding: 15px;
    min-height: 105px;
    border-radius: 0 0 12px 12px;
    h3 {
        font-size: 15px;
        margin: 0;
        margin-bottom: 2px;
    }
    .meta {
        display: flex;
        flex-direction: column;
        position: relative;
        .score {
            display:flex;
            flex-direction: row;
            margin-bottom: 5px;
            align-items: center;
            padding-left: 18px;
            &:before {
                content: '';
                background-image: url('/images/star.svg');
                background-size: contain;
                width: 16px;
                height: 16px;
                position:absolute;
                left: 0;
                top: -1px;
            }
            span {
                font-size:14px;
                letter-spacing: 0.7px;
            }
            .count {
                font-size: 13px;
                color: #999;
            }
        }
    }
    .tag {
        font-size: 12px;
        color: #666;
        line-height: 16px;
        letter-spacing: -0.6px;
    }
`