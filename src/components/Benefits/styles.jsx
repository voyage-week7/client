import styled from 'styled-components';

export const TitleHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .all{
        font-size:12px;
        letter-spacing: -0.6px;
        margin: 0;
        display: flex;
        align-items: center;
        cursor: pointer!important;
        &:after{
            content: '';
            background-image: url('/images/right_arrow.svg');
            background-size: cover;
            width: 16px;
            height: 16px;
            display: block;
            margin-left: 4px;
        }
    }
`

export const SquereItem = styled.div`
    width: 200px;
    .img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        margin-bottom: 8px;
        position: relative;
        position: relative;
        img {
            width: 200px;
            height: 200px;
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 10px;
        }
        span {
            color: #fff;
            background: rgba(255,61,0,0.85);
            font-size: 13px;
            letter-spacing: -0.7px;
            width: 100%;
            position: absolute;
            bottom: 0;
            padding: 8px 0;
            text-align: center;
            border-radius: 0 0 10px 10px;
        }
    }
    .tomorrow-img{
        width: 250px;
        height: 150px;
        margin-bottom: 8px;
        img{
            width: 250px;
            height: 150px;
            border-radius: 10px;
        }
    }
`

export const SquereFooter = styled.div`
    background-color: #fff;
    border-radius: 0 0 12px 12px;
    margin-bottom: 4px;
    line-height: 25px;
    h3 {
        font-size: 17px;
        margin: 0;
        letter-spacing: -0.9px;
    }
    .meta {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        margin-bottom: 5px;
        .score {
            display:flex;
            flex-direction: row;
            align-items: center;
            padding-left: 18px;
            font-size: 14px;
            margin-right: 6px;
            &:before {
                content: '';
                background-image: url('/images/star.svg');
                background-size: contain;
                width: 16px;
                height: 16px;
                position:absolute;
                left: 0;
                top: 2px;
            }
        }
    }
    .tags {
        font-size: 12px;
        color: #666;
        line-height: 16px;
        letter-spacing: -0.6px;
    }
     .time-table {
            display: flex;
            flex-direction: row;
            padding: 0;
            width: 100%;
            margin-right: 10px;
            li {
                font-size: 13px;
                color: #fff;
                background-color: #ff3d00;
                padding: 5px 4px;
                border-radius: 6px;
                margin-right: 6px;
                flex: 1;
                text-align: center;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
`
export const ShowAll = styled.div`
    height: 200px;
    width: 48px;
    margin-left: 39px;
    margin-right: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .circle {
        background-image: url('/images/right_arrow2.svg');
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        box-shadow: 0 5px 15px 0 rgba(0,0,0,10%), 0 0 3px 0 rgb(0,0,0,8%);
    }
    p {
        font-size:11px;
        letter-spacing: 0.6px;
        margin-top: 8px;
        text-align: center;
    }
`