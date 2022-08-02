import React from 'react';
import { Wapper } from '../../layouts/Layout';
import styled from 'styled-components';
import { Divider, Section } from './styles';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Wapper>
      <Section>
        <div className='title'>
          <h6>즐거운 미식생활의 시작</h6>
          <h3>CATCH TABLE</h3>
        </div>
        <div className='kakao_wrap'>
          <span className='__quick'>
            <img src='https://dau2wmhjxkxtx.cloudfront.net/web-static/static_webapp_v2/img/login/kakao_tooltip.svg' />
            <em>⚡️10초만에 빠른가입⚡️</em>
          </span>
          <button className='kakao' style={{ cursor: 'pointer' }} onClick={() => navigate('/loginEmail')}>
            <img
              src='https://dau2wmhjxkxtx.cloudfront.net/web-static/static_webapp_v2/img/login/kakao_button.svg'
              alt=''
            />
            <span>카카오로 시작하기</span>
          </button>
        </div>
        <Divider>또는</Divider>
        <div className='socials' onClick={() => navigate('/loginEmail')}>
          <div className='icon'>
            <img src='https://dau2wmhjxkxtx.cloudfront.net/web-static/static_webapp_v2/img/login/naver_v2.svg' alt='' />
          </div>
          <div className='split'></div>
          <div className='icon '>
            <img src='https://dau2wmhjxkxtx.cloudfront.net/web-static/static_webapp_v2/img/login/apple_v2.svg' alt='' />
          </div>
          <div className='split'></div>
          <div className='icon'>
            <img
              width={46}
              src='https://dau2wmhjxkxtx.cloudfront.net/web-static/static_webapp_v2/img/login/phone.svg'
              alt=''
            />
          </div>
        </div>
        <div className='other-btns'>
          <p>이미 가입하셨나요?</p>
          <button style={{ cursor: 'pointer' }} onClick={() => navigate('/loginEmail')}>
            이메일 로그인 하기
          </button>
        </div>
      </Section>
    </Wapper>
  );
};

export default Login;
