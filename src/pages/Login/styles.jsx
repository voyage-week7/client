import styled from 'styled-components';

export const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 0 20px;

  & .title {
    margin-bottom: 10vh;
    & h6 {
      font-size: 12px;
      color: #666;
      margin-bottom: 10px;
    }

    & h3 {
      font-weight: 900;
      font-size: 2rem;
      color: #ff3d00;
    }
  }

  & .kakao_wrap {
    position: relative;

    & .__quick {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 100%;
      display: block;
      margin-bottom: 4px;

      & em {
        display: block;
        text-align: center;
        font-size: 12px;
        position: absolute;
        top: 5px;
        left: 0;
        right: 0;
      }
    }
  }

  & .kakao {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee500;
    border: 1px solid #e8e8e8;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
    position: relative;
    box-sizing: border-box;

    & img {
      display: block;
      margin-right: 10px;
    }
  }

  & .icon {
    cursor: pointer;
    & img {
      margin: 5px;
      padding: 8px;
      border-radius: 50%;
      border: solid 1px #e8e8e8;
      background-color: #fff;
      box-sizing: border-box;
      flex: 1;
      text-align: center;
      font-size: 13px;
    }
  }

  & .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;

    .split {
      width: 1px;
      height: 15px;
      display: block;
      background: #e8e8e8;
    }
  }

  & .other-btns {
    margin: 40px auto;
    text-align: center;

    & p {
      margin-bottom: 12px;
    }

    & button {
      margin: 0 auto;
      display: flex;
      height: 48px;
      max-width: 255px;
      width: 100%;
      background: #fff;
      border: 1px solid #e8e8e8;
      border-radius: 50px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
  }
`;

export const Divider = styled.div`
  color: #aaa;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 4vh 0;

  &::after {
    height: 1px;
    background: #e8e8e8;
    flex: 1;
    content: '';
  }

  &::before {
    height: 1px;
    background: #e8e8e8;
    flex: 1;
    content: '';
  }
`;
