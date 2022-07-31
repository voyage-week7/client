import React from 'react';
import Menu from '../../components/Menu';
import CircleSlide from '../../components/Circle';
import BestCircle from '../../components/BestCircle';
import VideoReveiw from '../../components/VideoReview';
import RealReview from '../../components/RealReview';
import Benefits from '../../components/Benefits';
import NewOpen from '../../components/NewOpen';
import GuidBook from '../../components/GuideBook';
import TopicBest from '../../components/TipicBest';
import Tomorrow from '../../components/Tomorrow';

const Home = () => {
  return (
    <div style={{ maxWidth: "480px", margin: "0 auto" }}>
      <Menu />
      <CircleSlide />
      <VideoReveiw />
      <RealReview />
      <Benefits />
      <NewOpen />
      <GuidBook />
      <BestCircle />
      <TopicBest />
      <Tomorrow />
    </div>
  );
};

export default Home;
