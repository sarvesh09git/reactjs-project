import React from 'react'
import "./Contact.css";
const Contact = () => {
  return (
    <>
   <div className="contact-page">
      <h1 className="contact-title"  data-aos="fade-down" data-aos-duration="1500" >CONTACT US</h1>
      

      <div className="contact-container"  data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="2000">
        
        <div className="contact-info">
          <h2>Let's Talk</h2>
          <p>
            Have a question or feedback?  
            Reach out to us anytime.
          </p>

          <div className="info-item">
            <span>📍</span>
            <p>Pune, India</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <span>✉</span>
            <p>coffee@email.com</p>
          </div>
        </div>

        
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
</>
  )
}

export default Contact
