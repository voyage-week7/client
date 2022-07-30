import styled from 'styled-components';

export const MainMenu = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 20px 20px 20px;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid #333;
    div {
        display: flex;
        justify-content: space-between;
        flex: 1 0 20%;
        align-items: center;
        &:nth-child(-n+5){
            margin-bottom: 20px;
        }
        &:nth-child(6) .label{
            display: flex;
        }
        div{
            position: relative;
            align-items: center;
            justify-content: center;
        .label {
            position: absolute;
            display: none;
            left: 40px;
            top: -10px;
            width: 31px;
            height: 20px;
            border-radius: 31px;
            border: 1px solid #ff6632;
            font-size: 12px;
            color: #ff6632;
            background-color: #fff;
        }
        }
    }
`;

export const MainMenuItem = styled.li`
    display: flex;
    flex-direction: column;
    img{
        width: 48px;
        height: 48px;
    }
    p{
        font-size: 14px;
        margin: 7px 0 0 0;
        text-align: center;
        line-height: 16px;
    }

    @media screen and (max-width:350px) {
        img {
            width:42px;
            height:42px;
        }
    }
    @media screen and (max-width: 400px){
        p {
            font-size: 12px;
        }
    }
`