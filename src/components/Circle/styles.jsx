import styled from 'styled-components';

export const Circle = styled.section`
  padding-bottom: 45px;
  width: 100%;
  height: 100%;
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
  background-image: url(${(props) => props.img} );
  background-size: cover;
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:last-child{
    margin: 0;
  }
  &:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width:${(props) => props.width};
    height: ${(props) => props.height};
    background: rgba(0,0,0,0.4);
    border-radius: 50%;
  }
  &:first-child:before{
    content: none;
  }
  span {
    color: #fff;
    font-size:14px;
    text-align: center;
    width: 80%;
    line-height: 18px;
    z-index: 2;
    letter-spacing: -0.7px;
    word-break: keep-all;
  }
`