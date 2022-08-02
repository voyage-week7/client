import React, { useState } from 'react';
import { Wapper } from '../../layouts/Layout';
import styled from 'styled-components';
import { Section } from '../Login/styles';
import { Link, useNavigate } from 'react-router-dom';
import { FindPassWord, InputWrap, LoginButton } from './styles';
import { apis, instance } from '../../apis';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/features/userSlice';

const LoginEmail = () => {
  const [buttonActive, setButtonActive] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { login } = userSlice.actions;
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await apis.login(email, password);
    dispatch(login({ id: user.id, email: email, username: user.username }));
    console.log(user);
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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              placeholder='휴대폰 번호 or 닉네임'
              autoComplete='off'
            />
          </InputWrap>
          <InputWrap className='input-control mb-30'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='비밀번호'
              autoComplete='off'
            />
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