import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Search from '../pages/Search';
import Layout from './Layout';
import Login from '../pages/Login';
import Spinner from '../components/Spinner';
import MyDinning from '../pages/MyDinning';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../redux/features/userSlice';
import { useQuery } from '@tanstack/react-query';
import Stores from '../pages/Stores';
import Profilemodify from '../pages/Profilemodify';

const Home = React.lazy(() => import('../pages/Home'));
const Profile = React.lazy(() => import('../pages/Profile'));
const LoginEmail = React.lazy(() => import('../pages/LoginEmail'));
const SignUp = React.lazy(() => import('../pages/SignUp'));

function App() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { login: handleLoginAction } = userSlice.actions;

  useEffect(() => {
    dispatch(handleLoginAction({ id: '1', email: 'email', username: 'user.username' }));
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginEmail' element={<LoginEmail />} />
          <Route path='/signup' element={login(user.isLogin, <SignUp />)} />
          <Route path='/search' element={<Search />} />
          <Route path='/stores' element={<Stores />} />
          <Route path='/review' element={<div>review</div>} />
          <Route path='/reservations' element={<MyDinning />} />
          <Route path='/profile' element={login(user.isLogin, <Profile />, <SignUp />)} />
          <Route path='/profilemodify' element={<Profilemodify />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;

function login(isLogin, el, el2) {
  if (isLogin) {
    return el;
  } else {
    return el2;
  }
}
