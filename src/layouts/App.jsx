import React, { Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from '../pages/Search';
import Layout from './Layout';
import Login from '../pages/Login';
import Spinner from '../components/Spinner';

const Home = React.lazy(() => import('../pages/Home'));
const Profile = React.lazy(() => import('../pages/Profile'));
const LoginEmail = React.lazy(() => import('../pages/LoginEmail'));
const SignUp = React.lazy(() => import('../pages/SignUp'));

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Suspense fallback={<Spinner />}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginEmail' element={<LoginEmail />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/search' element={<Search />} />
          <Route path='/review' element={<div>review</div>} />
          <Route path='/reservations' element={<div>RESERVATIONS</div>} />
          <Route path='/profile' element={isLogin ? <Profile /> : <Login />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
