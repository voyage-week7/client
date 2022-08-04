import styled from 'styled-components';

export const StoreReview = styled.div`
    padding: 40px 20px;

    .input {
        position: relative;
      label {
        display: block;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: -0.6px;
        color: #666;
        margin-bottom: 6px;
      }
      input {
        border: none;
        background-color: #f9f9f9;
        width: 100%;
        padding: 14px 20px;
        line-height: 20px;
        font-size: 14px;
        border-radius: 6px;
        outline: none;
        font-weight: 400;
        letter-spacing: -0.7px;
        &::placeholder {
          color: #b6b6b6;
        }
        &:before {
        }
      }
      textarea {
        border: none;
        background-color: #f9f9f9;
        width: 100%;
        padding: 14px 20px;
        line-height: 20px;
        font-size: 14px;
        border-radius: 6px;
        outline: none;
        resize: none;
        font-weight: 400;
        letter-spacing: -0.7px;
        &::placeholder {
          color: #b6b6b6;
        }
      }
      .location {
        position: relative;
        input {
          padding-left: 34px;
        }
        span {
          display: block;
          width: 24px;
          height: 24px;
          background-image: url('/images/profile_location.svg');
          position: absolute;
          left: 5px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .img {
        margin: 20px 0;
        display: flex;
        align-items: center;
        label {
        display: block;
        background-color: #f9f9f9;
        height: 30px;
        line-height: 30px;
        border-radius: 6px;
        padding: 0 20px;
        cursor: pointer;
        transition: all 0.3s;
        border: 1px solid #eee;
        &:hover {
            background-color: #ff3d00;
            color: #fff;
        }
        }
        input {
          visibility: hidden;
        }
    }
    button {
        width: 100%;
        margin: 20px 0;
        padding: 8px 0;
        border: none;
        background-color: #ff3d00;
        border-radius: 6px;
        color: #fff;
        cursor: pointer;
    }
`