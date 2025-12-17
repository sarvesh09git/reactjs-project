import React from 'react'
import "./About.css"

import imgs from "./images/img3.png"
const About = () => {
  return (
      <div className="about-page" >
      {/* HERO SECTION */}
      <div className="about-hero" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1>ABOUT US</h1>
      </div>

      {/* CONTENT SECTION */}
      <div className="about-container" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            We started our café with one simple idea — to serve great coffee in a
            warm and welcoming space. Every cup we brew is made with carefully
            selected beans and a lot of love.
          </p>

          <p>
            Whether you’re here to relax, work, or catch up with friends, our
            café is your perfect place to unwind.
          </p>

          <h2>Why Choose Us</h2>
          <ul>
            <li>☕ Premium quality coffee beans</li>
            <li>🌱 Fresh and natural ingredients</li>
            <li>🏡 Cozy and friendly atmosphere</li>
            <li>😊 Passionate and skilled baristas</li>
          </ul>
        </div>

        {/* IMAGE SECTION */}
        <div className="about-image">
          <img src={imgs} alt="About Us" />
        </div>
      </div>

        

    
    </div>
  )
}

export default About
