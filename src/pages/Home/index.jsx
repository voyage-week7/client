import React from 'react';
import Menu from '../../components/Menu';
import CircleSlide from '../../components/Circle';
import BestCircle from '../../components/BestCircle';

const Home = () => {
  return (
    <div style={{ maxWidth: "480px", margin: "0 auto" }}>
      <Menu />
      <CircleSlide />
      <BestCircle />
    </div>
  );
};

export default Home;
