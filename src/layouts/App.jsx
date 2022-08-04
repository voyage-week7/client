import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../redux/features/userSlice';
import { useQuery } from '@tanstack/react-query';
import Stores from '../pages/Stores';
import Profilemodify from '../pages/Profilemodify';
import My from '../pages/My';
import Planned from '../pages/Planned';
import Done from '../pages/Done';
import Cancel from '../pages/Cancel';
import Notification from '../pages/Notification';
import ReviewWrite from '../components/ReviewWrite';
import { apis } from '../apis';

const Home = React.lazy(() => import('../pages/Home'));
const Profile = React.lazy(() => import('../pages/Profile'));
const LoginEmail = React.lazy(() => import('../pages/LoginEmail'));
const SignUp = React.lazy(() => import('../pages/SignUp'));
const MyDinning = React.lazy(() => import('../pages/MyDinning'));
const Search = React.lazy(() => import('../pages/Search'));
const Login = React.lazy(() => import('../pages/Login'));
const Feed = React.lazy(() => import('../pages/Feed'));

function App() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { logIn } = userSlice.actions;

  const hadleAutoLogin = useCallback(async () => {
    const userInfo = await apis.getUser();
    dispatch(logIn({ id: userInfo.id, username: userInfo.username }));
  }, []);

  useEffect(() => {
    // 자동 로그인 처리
    hadleAutoLogin();
  }, [dispatch, logIn]);

  return (
    <Suspense fallback={<Spinner />}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginEmail' element={<LoginEmail />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/search' element={<Search />} />
          <Route path='/stores/:Rid/*' element={<Stores />} />
          <Route path='/review' element={<Feed />} />
          <Route path='/profilemodify' element={<Profilemodify />} />
          <Route path='/reservations' element={<MyDinning />}>
            <Route path='my' element={<My />}>
              <Route path='planned' element={<Planned />} />
              <Route path='done' element={<Done />} />
              <Route path='cancel' element={<Cancel />} />
            </Route>
            <Route path='alert' element={<Notification />} />
          </Route>
          <Route path='/profile' element={checkLogin(user.isLogin, <Profile />, <Login />)} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;

function checkLogin(isLogin, el, el2) {
  if (isLogin) {
    return el;
  } else {
    return el2;
  }
}
