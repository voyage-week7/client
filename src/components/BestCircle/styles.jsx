import styled from 'styled-components';

export const Circle = styled.section`
  padding-bottom: 45px;
  width: 100%;
  height: 100%;
  div{
    .scroll {
      overflow: auto;
      .scroll-container{
        display: flex;
        flex-wrap: nowrap;
        padding: 0 20px;
        .scroll-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
            span {
            font-size: 14px;
            line-height: 36px;
            height: 36px;
            cursor: pointer;
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
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-color:rgba(0,0,0,0.4);
  width: 84px;
  min-width: 84px;
  height: 84px;
  margin: 0 7.5px;
  border-radius: 50%;
  
`