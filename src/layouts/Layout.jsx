import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const [headerTrigger, setHeaderTrigger] = useState(false);
  const location = useLocation();
  const [word, setWord] = useState('');
  const onSearch = useCallback(
    (e) => {
      e.preventDefault();
      console.log(word);
      setWord('');
    },
    [word]
  );

  const now = useMemo(() => {
    console.log(location.pathname);
    return location.pathname;
  }, [location]);

  useEffect(() => {
    const onScroll = (e) => {
      if (window.scrollY > 30) {
        setHeaderTrigger(true);
      } else {
        setHeaderTrigger(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Wapper>
      <Header headerTrigger={headerTrigger}>
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
          <div className='header-right'>
            <img src='/images/search-white.svg' alt='search' />
            <img src='/images/alert-white.svg' alt='alert' />
          </div>
        </div>
      </Header>
      {children}
      <NavBar>
        <div className='container'>
          <div>
            <Link to='/'>
              <img src={now === '/' ? '/images/home.svg' : '/images/home-light.svg'} alt='' />
            </Link>
          </div>
          <div>
            <Link to='/search'>
              <img src={now === '/search' ? '/images/search-bold.svg' : '/images/search-black.svg'} alt='' />
            </Link>
          </div>
          <div>
            <Link to='/review'>
              <img src={now === '/review' ? '/images/review-bold.svg' : '/images/review.svg'} alt='' />
            </Link>
          </div>
          <div>
            <Link to='/reservations'>
              <img src={now === '/reservations' ? '/images/calendar-bold.svg' : '/images/calendar.svg'} alt='' />
            </Link>
          </div>
          <div>
            <Link to='/profile'>
              <img src={now === '/profile' ? '/images/user-bold.svg' : '/images/user.svg'} alt='' />
            </Link>
          </div>
        </div>
      </NavBar>
    </Wapper>
  );
};

export default Layout;

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  & .container {
    margin: 0 auto;
    max-width: 480px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    height: 48px;

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Wapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  background: #fff;
  width: auto;
  position: relative;
  min-height: 100vh;
  box-shadow: 0 0 20px rgb(0 0 0 / 5%);
`;

const Header = styled.header`
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  position: fixed;
  transition: all 100ms;
  padding: 0 20px;
  background: ${({ headerTrigger }) => (headerTrigger ? 'white' : 'transparent')};

  & .container {
    max-width: 480px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    width: 100%;
    margin: auto;

    & .header-left {
      flex: 1;
      display: ${({ headerTrigger }) => (headerTrigger ? 'flex' : 'none')};
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

    & .header-right {
      display: ${({ headerTrigger }) => (headerTrigger ? 'none' : 'flex')};
      align-items: center;
      margin-left: auto;
    }
  }
`;
