import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wapper } from '../../layouts/Layout';
import { Section } from '../Login/styles';
import { FindPassWord, InputWrap, LoginButton } from '../LoginEmail/styles';
import { apis } from '../../apis';

const SignUp = () => {
  const navigate = useNavigate();
  const [buttonActive, setButtonActive] = useState(true);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(id, pw, username);
    const res = await apis.signUp(id, pw, username);
    if (res.status === 201) {
      navigate('/loginEmail');
    } else {
      alert('회원가입 실패');
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
              type='text'
              placeholder='아이디'
              autoComplete='off'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </InputWrap>
          <InputWrap>
            <input
              type='text'
              placeholder='이름'
              autoComplete='off'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputWrap>
          <InputWrap className='input-control mb-30'>
            <input
              type='password'
              placeholder='비밀번호'
              autoComplete='off'
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <button type='button' className='hide-password '>
              패스워드보이기
            </button>
          </InputWrap>
          <InputWrap className='input-control mb-30'>
            <input
              type='password'
              placeholder='비밀번호 확인'
              autoComplete='off'
              value={pwCheck}
              onChange={(e) => setPwCheck(e.target.value)}
            />
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
