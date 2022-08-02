import React, { useState } from 'react';
import { Wapper } from '../../layouts/Layout';
import styled from 'styled-components';
import { Section } from '../Login/styles';
import { Link, useNavigate } from 'react-router-dom';
import { FindPassWord, InputWrap, LoginButton } from './styles';

const LoginEmail = () => {
  const navigate = useNavigate();
  const [buttonActive, setButtonActive] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Wapper>
      <Section>
        <div className='title' style={{ marginBottom: '4rem' }}>
          <h6>즐거운 미식생활의 시작</h6>
          <h3>CATCH TABLE</h3>
        </div>
        <form onSubmit={handleLogin}>
          <InputWrap>
            <input type='text' placeholder='휴대폰 번호 or 닉네임' autoComplete='off' />
          </InputWrap>
          <InputWrap className='input-control mb-30'>
            <input type='password' placeholder='비밀번호' autoComplete='off' />
            <button type='button' className='hide-password '>
              패스워드보이기
            </button>
          </InputWrap>

          <FindPassWord>
            <Link to='/signup'>아직 회원이 아니신가요?</Link>
          </FindPassWord>
          <LoginButton buttonActive={buttonActive} type='submit'>
            <strong>로그인</strong>
          </LoginButton>
        </form>
      </Section>
    </Wapper>
  );
};

export default LoginEmail;
