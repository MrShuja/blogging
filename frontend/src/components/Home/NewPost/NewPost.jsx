import React from 'react'
import style from './NewPost.css'
const NewPost = () => {
  return (
  
   /* <div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the<br /> 
    card title and make up the bulk of the card's<br /> content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>*/
<div className='post-main'>
  {/* Ist post */}
<div className='post'>
  <div className="post-image">
  <img src={`${process.env.PUBLIC_URL}/assets/image10.jpg`} alt="Car icon" />
  </div>
<div className="post-text">
<h2>Marketing</h2>
<p className="post-info">
  <a href="" className="author">David paszuko</a><br />
  <time>2023-01-08 16:45</time>
</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Minus perferendis quibusdam sunt perspiciatis! Dolorem quasi 
     totam minima voluptate atque libero ad? Dignissimos quas optio
    eaque delectus! Deserunt eaque reiciendis eveniet.</p>
</div>

</div>
 {/* 2nd  Post */}
<div className='post'>
<div className="post-image">
  <img src={`${process.env.PUBLIC_URL}/assets/image11.jpg`} alt="Car icon" />
  </div>
  <div className="post-text">
<h2>Social Media Marketing</h2>
<p className="post-info">
  <a href="" className="author">David paszuko</a><br />
  <time>2023-01-08 16:45</time>
</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Minus perferendis quibusdam sunt perspiciatis! Dolorem quasi 
     totam minima voluptate atque libero ad? Dignissimos quas optio
    eaque delectus! Deserunt eaque reiciendis eveniet.</p>
</div>
</div>
 {/* 3nd  Post */}
<div className='post'>
<div className="post-image">
  <img src={`${process.env.PUBLIC_URL}/assets/image12.jpg`} alt="Car icon" />
  </div>
  <div className="post-text">
<h2>UI/UX Designing</h2>
<p className="post-info">
  <a href="" className="author">David paszuko</a><br />
  <time>2023-01-08 16:45</time>
</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Minus perferendis quibusdam sunt perspiciatis! Dolorem quasi 
     totam minima voluptate atque libero ad? Dignissimos quas optio
    eaque delectus! Deserunt eaque reiciendis eveniet.</p>
</div>
</div>
</div>


  )}

export default NewPost
