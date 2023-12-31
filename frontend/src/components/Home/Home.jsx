import React from 'react'
import style from './Home.css'
import Slider from './Slider/Slider'
import NewPost from './NewPost/NewPost';
import IntroSection from './IntroSection/IntroSection';
import LatestBlogs from '../latestBlogs/LatestBlogs';
import Footer from '../Footer/Footer';

const Home = () => {

  return (
    <div>
      < Slider />
      <LatestBlogs />
      <NewPost />
      <IntroSection />
      <Footer />
     
    </div>
  )
}

export default Home
