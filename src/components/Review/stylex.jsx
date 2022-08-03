import styled from 'styled-components';

export const ReviewContainer = styled.div`
    border-top: 1px solid #e8e8e8;
    .header {
        padding: 16px;
        .user_info {
            margin-bottom: 16px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            img{
                width: 30px;
                height: 30px;
            }
        }
        .review_meta {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
            p {
                font-size:14px;
                line-height: 14px;
                letter-spacing: -0.7px;
                color: #666;
                font-weight: 400;
            }
            span {
                display: flex;
                flex-direction: row;
                align-items: center;
                font-size: 14px;
                line-height: 14px;
                letter-spacing: -0.7px;
                gap: 5px;
                &:before {
                    content: '';
                    background-image: url('/images/star.svg');
                    width: 14px;
                    height: 14px;
                    display: block;
                    background-size:cover;
                }
            }
        }
    }
    .review_post {
        padding: 20px;
        h4{
            font-size: 14px;
            letter-spacing: -0.7px;
            margin-bottom: 10px;
        }
        p{
            font-size: 14px;
            letter-spacing: -0.7px;
        }
    }
`

export const ReviewImg = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;
    li {
        width: 160px;
        height: 160px;
        img {
            width: 100%;
            height: 100%;
        }
    }

`
