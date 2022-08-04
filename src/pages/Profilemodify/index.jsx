import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apis } from '../../apis';
import { SearchHeader } from '../Search';

const Profilemodify = ({ username, description, region }) => {
    const navigate = useNavigate();
    const username_ref = useRef();
    const desc_ref = useRef();
    const region_ref = useRef();
    const queryClient = useQueryClient();
    const { data } = useQuery(['user'], () => apis.getUser().then(res => res.data));
    const mutate = useMutation((data) => apis.patchUser(data), {
        onSuccess: () => {
            queryClient.invalidateQueries(['user']);
        },
        onError: () => {
            console.log('실패');
        }
    }); // post

    const profilemodify = (e) => {
        const data = {
            username: username_ref.current.value,
            description: desc_ref.current.value,
            region: region_ref.current.value
        }
        e.preventDefault();
        mutate.mutate(data);
        navigate('/profile');
    };
    return (
        <>
            <SearchHeader>
                <nav>
                    <span onClick={() => navigate(-1)}></span>
                    <h3>프로필 수정</h3>
                </nav>
                <Myaccount>
                    <div className='pic'>
                        <img src='/images/profile_default.png' alt='' />
                    </div>
                    <form className='form'>
                        <div className='input'>
                            <label htmlFor=''>닉네임</label>
                            <input ref={username_ref} defaultValue={data?.username || ''} type='text' placeholder='닉네임은 최대 15자까지 가능합니다.' />
                        </div>
                        <div className='input'>
                            <label htmlFor=''>자기 소개</label>
                            <textarea
                                ref={desc_ref}
                                type='text'
                                rows='3'
                                defaultValue={data?.description || ''}
                                placeholder='자신을 알릴 수 있는 소개글을 작성해 주세요.'
                            />
                        </div>
                        <div className='input'>
                            <label htmlFor=''>활동 지역</label>
                            <div className='location'>
                                <span></span>
                                <input type='text' defaultValue={data?.region || ''} ref={region_ref} placeholder='ex)분당에 있지만 맛있는 곳은 어디든지' />
                            </div>
                        </div>
                        <button onClick={profilemodify}>저장</button>
                    </form>
                </Myaccount>
            </SearchHeader>
        </>
    );
};

export default Profilemodify;

export const Myaccount = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  .pic {
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 96px;
      height: 96px;
    }
  }
  .form {
    position: relative;
    display: flex;
    gap: 24px;
    flex-direction: column;
    max-width: 480px;
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
    button {
      position: fixed;
      bottom: 80px;
      border: none;
      background-color: #ff3d00;
      color: #fff;
      font-size: 14px;
      letter-spacing: -0.7px;
      text-align: center;
      width: 100%;
      border-radius: 6px;
      line-height: 46px;
      max-width: 440px;
      cursor: pointer;
    }
  }
`;
