import React, { useState } from 'react';
import { Wapper } from '../../layouts/Layout';
import { Section } from '../Login/styles';
import { Link, useNavigate } from 'react-router-dom';
import { FindPassWord, InputWrap, LoginButton } from './styles';
import { apis } from '../../apis';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/features/userSlice';

const LoginEmail = () => {
  const dispatch = useDispatch();
  const { logIn } = userSlice.actions;
  const navigate = useNavigate();
  const [buttonActive, setButtonActive] = useState(true);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await apis.logIn(id, password);

    if (user.headers.authorization) {
      window.localStorage.setItem('token', user.headers.authorization.split(' ')[1]);
      const userInfo = await apis.getUser();
      console.log(userInfo);
      dispatch(logIn({ id: userInfo.id, username: userInfo.username }));
      navigate('/');
    }
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
              value={id}
              onChange={(e) => setId(e.target.value)}
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
