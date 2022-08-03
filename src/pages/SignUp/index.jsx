import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wapper } from '../../layouts/Layout';
import { Section } from '../Login/styles';
import { FindPassWord, InputWrap, LoginButton } from '../LoginEmail/styles';

const SignUp = () => {
  const navigate = useNavigate();
  const [buttonActive, setButtonActive] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/loginEmail');
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
            <input type='text' placeholder='이메일' autoComplete='off' />
          </InputWrap>
          <InputWrap className='input-control mb-30'>
            <input type='password' placeholder='비밀번호' autoComplete='off' />
            <button type='button' className='hide-password '>
              패스워드보이기
            </button>
          </InputWrap>
          <InputWrap className='input-control mb-30'>
            <input type='password' placeholder='비밀번호 확인' autoComplete='off' />
            <button type='button' className='hide-password '>
              패스워드보이기
            </button>
          </InputWrap>
          <FindPassWord>
            <Link to='/loginEmail'>이미 회원이신가요?</Link>
          </FindPassWord>
          <LoginButton buttonActive={buttonActive} type='submit'>
            <strong>회원가입</strong>
          </LoginButton>
        </form>
      </Section>
    </Wapper>
  );
};

export default SignUp;
