import React from 'react';
import Menu from '../../components/Menu';
import CircleSlide from '../../components/Circle';
import BestCircle from '../../components/BestCircle';
import VideoReveiw from '../../components/VideoReview';
import RealReview from '../../components/RealReview';
import Benefits from '../../components/Benefits';
import NewOpen from '../../components/NewOpen';
import GuidBook from '../../components/GuideBook';
import TopicBest from '../../components/TopicBest';
import Tomorrow from '../../components/Tomorrow';
import ImageSwiper from '../../components/Swiper/iindex';
import { logoSlideImages } from '../../mock/apis';
import { GrayBackground } from '../Profile';

const Home = () => {
  return (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
      <ImageSwiper data={logoSlideImages} />
      <Menu />
      <GrayBackground height="10px" color='#f9f9f9' />
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
