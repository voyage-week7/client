import styled from 'styled-components';
import icon from './img/0706apgujeong.jpeg'

export const Circle = styled.section`
  padding-bottom: 45px;
  width: 100%;
  height: 100%;
  border: 1px solid #333;
`;
export const ScrollContainer = styled.div`
      overflow: auto;
      display: flex;
      .scroll-container{
        display: flex;
        flex-wrap: nowrap;
        padding: 0 20px;
      }
    &::-webkit-scrollbar{
      display: none;
    }
`

export const CircleItem = styled.div`
  background-image: url(${icon});
  background-size: cover;
  background-color:rgba(0,0,0,0.4);
  width: 60px;
  min-width: 60px;
  height: 60px;
  margin-right: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child{
    margin: 0;
  }
  span {
    color: #fff;
    font-size:14px;
    text-align: center;
    width: 80%;
    line-height: 18px;
    cursor: default;
  }
`