import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile';
import Layout from './Layout';

const Home = React.lazy(() => import('../pages/Home'));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<div>SEARCH</div>} />
          <Route path='/review' element={<div>review</div>} />
          <Route path='/reservations' element={<div>RESERVATIONS</div>} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
