import React from 'react'

import style from './IntroSection.css'
const IntroSection = () => {
  return (
    <div className='intro'>
        <div className='text'>
        <h1>Introduction</h1>
        <p>Our team of expert developers and designers work tirelessly to develop unique and <br />
        innovative software soluions that meet the specific nedds of our clients. In todays fast- <br />
        paced world, it is more important than ever top stay up-to-date with the latest<br /> 
        technology trends.<br /><br />
        NuVision is commited to staying ahead of the curve when it comes to software<br />
        development. We are constantly exploring new and innovative technologies to ensure<br />
        that our clients have access to the most advanced and effective software solutions<br />
        available.<br /><br />
        At NuVision, we are dedicated to providing our clients with the highest level of customer<br />
        service. We believe in building strong relashionships with our clients and strive to provide<br />
        open and transparent communication throughout every stage of the development<br />
        process. We understand that the success of our clinets projects is directly tied to our<br />
        own success, which is why we go above and beyond to ensure that every project is<br />
        delivered on time, on budget, and to the highest possible standard.<br /><br />
        At NuVision, we are committed to providing our clients with the best possible software<br />
        development solutions. If youre looking for a partner to help you stay ahead of the<br />
        competition, look no further than nuVision. Contact us today to learn more about our<br />
        comprehensive software development services and how we can help take your<br />
        businessto the next level.</p></div>
        <div className='subscribe-section'>
            <h3>Subscribe Now</h3>
            <p>No Spam. Just the latest releases <br />
            and tips, interesting articles,and<br />
            exclusive interviews in your inbox<br />
            every week</p>
            <div class="mx-5">
    <label for="exampleInputEmail1"   class="form-label"></label>
    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder='Email Adress' aria-describedby="emailHelp"/>
  
  </div>
  <div class="mx-5 col-sm-10">
  <button type="submit" class="btn">Submit</button></div>
        </div>
        </div>
        
  )
}

export default IntroSection