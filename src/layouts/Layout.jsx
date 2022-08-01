import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  const [word, setWord] = useState('');
  const onSearch = useCallback(
    (e) => {
      e.preventDefault();
      console.log(word);
      setWord('');
    },
    [word]
  );
  return (
    <Wapper>
      <Header>
        <div className='container'>
          <div className='header-left'>
            <div className='brand'>C</div>
            <form onSubmit={onSearch}>
              <input
                type='text'
                placeholder='지역, 음식, 레스토랑명으로 찾아보세요.'
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <img src='/images/search.svg' alt='search-icon' />
            </form>
          </div>
        </div>
      </Header>
      {children}
      <nav>navbar</nav>
    </Wapper>
  );
};

export default Layout;

const Wapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  background: #fff;
  width: auto;
  position: relative;
  min-height: 100%;
  box-shadow: 0 0 20px rgb(0 0 0 / 5%);
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;

  & .container {
    max-width: 480px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 48px;
    width: 100%;
    background: #fff;

    & .header-left {
      flex: 1;
      display: flex;
      align-items: center;

      & .brand {
        width: 30px;
        height: 30px;
        margin-right: 12px;
        background-color: #ff3d00;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-weight: 700;
        font-size: 20px;
        padding: 2px 1px 0 0;
      }

      & form {
        position: relative;
        flex: 1;

        & img {
          position: absolute;
          top: 6px;
          left: 7px;
        }

        & input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          border-radius: 18px;
          border: none;
          background-color: #f9f9f9;
          height: 36px;
          font-size: 12px;
          padding-left: 33px;
          padding-right: 44px;
          font-weight: 500;
          outline: none;
        }
      }
    }
  }
`;
