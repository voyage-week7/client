import styled from 'styled-components';
import icon from './img/_0010_sushi_omakase.jpeg'

export const Circle = styled.section`
  padding-bottom: 45px;
  width: 100%;
  height: 100%;
  border: 1px solid #333;
  div{
    .scroll {
      overflow: auto;
      .scroll-container{
        display: flex;
        flex-wrap: nowrap;
        padding: 0 20px;
        .scroll-item {
            span {
            font-size: 14px;
            line-height: 36px;
            height: 36px;
        }
        }
      }
    }
    .scroll::-webkit-scrollbar{
      display: none;
    }
  }
`;

export const CircleItem = styled.div`
  background-image: url(${icon});
  background-size: cover;
  background-color:rgba(0,0,0,0.4);
  width: 84px;
  min-width: 84px;
  height: 84px;
  margin-right: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`