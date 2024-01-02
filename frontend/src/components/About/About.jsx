import React from 'react'
import style from './About.css'
import Footer from '../Footer/Footer';
import Subscribe from '../subscribe/Subscribe';
import  './About.css'

function About() {

   
  return (
    <section className="About-section">
        <div className="main">
        <img src={`${process.env.PUBLIC_URL}/assets/web.jpg`} alt="John Smith"/>
        <div className="About-text">
            <h1><b>WHO WE ARE</b></h1>
            <h5>Developers <span>& Design</span></h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus amet blanditiis vel dolores ad, omnis, esse,
            asperiores corrupti reprehenderit ipsa qui adipisci dicta
            quasi earum! Ab dicta ea labore iusto!</p>
            <button type='button'>Let's Talk</button>
            </div>
        </div>
        <Subscribe />
        <Footer />
        </>
      );
=======
        </section>
    
        


    
  )

}

export default About