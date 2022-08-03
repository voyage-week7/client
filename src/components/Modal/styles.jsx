import styled from 'styled-components';

export const ModalContainer = styled.div`
`
export const ModalSection = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    left: 0;
    top: 0;
    align-items: center;
    justify-content: center;
            display: ${(props) => props.isOpen ? 'flex' : 'none'};
    .modalcont {
        height: 100vh;
        min-width: 480px;
        background-color: #fff;
    }
    &.location-cont {
        display: ${(props) => props.visible ? 'flex' : 'none'};
    }
`
export const FilterList = styled.ul`
        display: flex;
        flex-direction: column;
        padding: 80px 20px;
        gap: 44px;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            &:after {
                content: '';
                display: block;
                width: 24px;
                height: 24px;
                background-image: url('/images/right_arrow.svg');
                background-size: cover;
            }
            div{
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
                p {
                    font-weight: 600;
                }
                span {
                    position: absolute;
                    bottom: -20px;
                    left: 35px;
                    font-size: 14px;
                    color: #aaa;
                    width: 100%;
                }
            }
            .location {
                display: block;
                background-image: url('/images/filter_location.svg');
                width: 26px;
                height: 26px;
            }
            .food {
                display: block;
                background-image: url('/images/filter_food.svg');
                width: 26px;
                height: 26px;
            }
        }
`

export const LocationCont = styled.div`
    padding: 48px 0;
    display: flex;
    flex-direction: row;
    font-weight: 400;
    .cat1 {
        width: 160px;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.8px;
        border-right: 1px solid #e5e5e5;
        ul {
            padding-bottom: 700px;
            cursor: pointer;
            li {
                padding-left: 30px;
                height: 54px;
                line-height: 54px;
            }
        }
    }
    .cat2 {
        flex: 1;
        ul {
            cursor: pointer;
            li {
                padding-left: 30px;
                line-height: 54px;
                height: 54px;
            }
        }
    }
`
export const StickyBottom = styled.div`
    position: fixed;
    bottom: 0;
    padding: 20px;
    max-width: 480px;
    width: 100%;
    background-color: #fff;
    display: flex;
    gap:10px;
    button {
        font-size: 14px;
        line-height: 46px;
        letter-spacing: -0.7px;
        background-color: #fff;
        border: 1px solid #d5d5d5;
        border-radius: 6px;
        flex: 1;
        cursor: pointer;
    &:first-child {
        max-width: 104px;
    }
    &:last-child {
        background-color: #ff3d00;
        color: #fff;
        border: none;
    }
    }
    .reservation {
        display: flex;
        flex-direction: row;
        height: 48px;
        width: 100%;
        align-items: center;
        .leftbutton {
            padding: 0 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            p{
            width: 32px;
            height: 32px;
            margin: 0 7px;
            cursor: pointer;
            &:first-child{
                background-image: url('/images/back_arrow.svg');  
            }
            &:nth-child(2){
                background-image: url('/images/bookmark.svg');
            }
            &:nth-child(3){
                background-image: url('/images/share.svg');
            }
            &:nth-child(4){
                background-image: url('/images/call.svg');
            }
        }
        }
        button{
            border-radius: 30px;
            height: 36px;
            line-height: 36px;
        }
    }
`
