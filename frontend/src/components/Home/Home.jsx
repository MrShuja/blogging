import React from 'react'
import style from './Home.css'
import Slider from './Slider/Slider'
import NewPost from './NewPost/NewPost';
import IntroSection from './IntroSection/IntroSection';

const Home = () => {

  return (
    <div>
      < Slider />
      <NewPost />
      <IntroSection />
    </div>
  )
}

export default Home
