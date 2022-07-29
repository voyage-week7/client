import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const Home = React.lazy(() => import('../pages/Home'));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<div>SEARCH</div>} />
          <Route path='/feed' element={<div>FEED</div>} />
          <Route path='/reservations' element={<div>RESERVATIONS</div>} />
          <Route path='/profile' element={<div>PROFILE</div>} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
