import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Profile = () => {
    const [tab, setTab] = useState(0);
    const navigate = useNavigate();
    return (
        <>
            <Pageheader>
                <nav>
                    <h3>마이페이지</h3>
                    <span></span>
                </nav>
            </Pageheader>
            <ProfileContainer>
                <ProfileSection style={{ paddingTop: '24px' }}>
                    <div className='profile'>
                        <div className='profile-main'>
                            <img src='/images/profile_default.png' alt='' />
                            <div className='profile-meta'>
                                <h4>유명한 미식가_42274</h4>
                                <div className='desc'>
                                    <dl>
                                        <dt>팔로잉</dt>
                                        <dd>0</dd>
                                    </dl>
                                    <span>|</span>
                                    <dl>
                                        <dt>팔로워</dt>
                                        <dd>0</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => navigate('/profilemodify')}>프로필 수정</button>
                    </div>
                </ProfileSection>
                <GrayBackground height='8px' />
                <SummarySection>
                    <ul>
                        <li>
                            <p>평균 별점</p>
                            <span>아직 평가를 하지 않았어요</span>
                        </li>
                        <li>
                            <p>음식 취향</p>
                            <span>아직 취향을 선택하지 않았어요</span>
                        </li>
                        <li>
                            <p>활동 지역</p>
                            <span>아직 활동 지역을 입력하지 않았어요</span>
                        </li>
                    </ul>
                </SummarySection>
                <GrayBackground height='8px' />
            </ProfileContainer>
            <Tabmenu>
                <ul>
                    {tab === 0 ? (
                        <li onClick={() => setTab(0)} className='focus'>
                            컬렉션 <p>0</p>
                        </li>
                    ) : (
                        <li onClick={() => setTab(0)}>
                            컬렉션 <p>0</p>
                        </li>
                    )}
                    {tab === 1 ? (
                        <li onClick={() => setTab(1)} className='focus'>
                            리뷰<p>0</p>
                        </li>
                    ) : (
                        <li onClick={() => setTab(1)}>
                            리뷰<p>0</p>
                        </li>
                    )}
                </ul>
                <Collection>
                    {tab === 0 ? (
                        <CollectionCont>
                            <section>
                                <h3>
                                    내가 만든 컬렉션 <p>0</p>
                                </h3>
                                <span></span>
                            </section>
                            <section>
                                <h3>
                                    관심 레스토랑 <p>0</p>
                                </h3>
                                <span></span>
                            </section>
                        </CollectionCont>
                    ) : (
                        <CollectionCont display='none'>
                            <section>
                                <h3>
                                    내가 만든 컬렉션 <p>0</p>
                                </h3>
                                <span></span>
                            </section>
                            <section>
                                <h3>
                                    관심 레스토랑 <p>0</p>
                                </h3>
                                <span></span>
                            </section>
                        </CollectionCont>
                    )}
                    {tab === 1 ? (
                        <ReviewCont>
                            <section>등록된 리뷰가 없습니다</section>
                        </ReviewCont>
                    ) : (
                        <ReviewCont display='none'>
                            <section>등록된 리뷰가 없습니다</section>
                        </ReviewCont>
                    )}
                </Collection>
            </Tabmenu>
        </>
    );
};

export const Wrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 5%);
`;

export const Pageheader = styled.header`
    position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    height: 48px;
    justify-content: space-between;
    h3 {
      font-size: 20px;
      letter-spacing: -1px;
      cursor: default;
    }
    span{
        display: block;
        width: 22px;
        height: 22px;
        background-image: url('/images/setting.svg');
        cursor: pointer;
    }
    p {
        color: #ff3d00;
        font-size: 14px;
        letter-spacing: -0.7px;
        display: flex;
        flex-direction: row;
        gap: 4px;
        cursor: pointer;
        &:before{
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            background-image: url('/images/initialization.svg');
        }
    }
}
`

export const ProfileContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

export const ProfileSection = styled.section`
  display: flex;
  .profile {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    width: 100%;
    .profile-main {
      display: flex;
      flex-direction: row;
      margin-bottom: 15px;
      img {
        width: 80px;
        height: 80px;
        margin-right: 12px;
        border-radius: 50%;
      }
      .profile-meta {
        display: flex;
        flex-direction: column;
        padding-top: 15px;
        h4 {
          font-size: 16px;
          letter-spacing: -0.8px;
        }
        .desc {
          display: flex;
          flex-direction: row;
          gap: 10px;
          margin-top: 5px;
          dl {
            display: flex;
            gap: 5px;
            margin: 0;
            display: flex;
            flex-direction: row;
            dt {
              font-size: 12px;
              color: #666;
            }
            dd {
              font-size: 14px;
              font-weight: bold;
              margin: 0;
            }
          }
          span {
            font-size: 14px;
            color: #666;
            letter-spacing: -0.7px;
          }
        }
      }
    }
    button {
      border: none;
      background-color: #fff;
      text-align: center;
      width: 100%;
      font-size: 14px;
      border: 1px solid #d5d5d5;
      line-height: 38px;
      border-radius: 24px;
      margin: 20px 0 28px 0;
      cursor: pointer;
    }
  }
`;
export const SummarySection = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    li {
      padding: 18px 20px;
      font-size: 14px;
      letter-spacing: -0.7px;
      color: #666;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #e8e8e8;
      p {
        margin: 0;
        min-width: 5em;
      }
      span {
        display: flex;
        flex: 1;
        justify-content: center;
      }
      &:last-child {
        border: none;
      }
      &:nth-child(2) span:after {
        content: '';
        background-image: url('/images/right_arrow.svg');
        width: 16px;
        height: 16px;
        margin-left: 5px;
      }
      &:nth-child(3) span:after {
        content: '';
        background-image: url('/images/right_arrow.svg');
        width: 16px;
        height: 16px;
        margin-left: 5px;
      }
    }
  }
`;

export const Tabmenu = styled.div`
margin-top: ${(props) => props.margin === 0 ? "0" : "48px"};
  ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0;
    padding: 0;
    li {
      font-size: 15px;
      text-align: center;
      justify-content: center;
      width: 50%;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 16px 4px;
      border-bottom: 2px solid #ececec;
      cursor: pointer;
      p {
        font-size: 14px;
        color: #999;
        margin: 0;
        margin-left: 3px;
      }
    }
    .focus {
      border-bottom: 2px solid #333;
    }
  }
`;

export const Collection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionCont = styled.div`
  section {
    padding: 20px 20px 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    display: ${(props) => props.display};
    h3 {
      font-size: 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      margin-bottom: 15px;
      p {
        font-size: 14px;
        color: #999;
        margin-left: 8px;
        font-weight: lighter;
      }
    }
    span {
      width: 16px;
      height: 16px;
      display: block;
      background-image: url('/images/right_arrow.svg');
    }
  }
`;
export const ReviewCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => props.display};
  section {
    color: #c8c8c8;
    font-size: 18px;
    cursor: default;
    padding: 114px 0;
  }
`;

export const GrayBackground = styled.hr`
  width: 100%;
  height: ${(props) => props.height};
  background-color: #ececec;
  background-color: ${(props) => props.color};
  margin: 0;
  border: 0;
`;
export default Profile;
