import React, { useEffect } from 'react'
import './Contact.css'
import contactBG from './contact-bg.jpg'

function Contact() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='contactPage-section'>
      <div className="container">
        <div className="bg"></div>
        <div className="contact-main-container">
            <div className="heading">
                <span>Get in touch</span>
            </div>
            <div className="main-container">
                <div className="up">
                <div className="left">
                    <img src={contactBG} alt="" />
                </div>
                <form action="">
                    <div className="name same-field">
                        <input type="text" placeholder='Name' required />
                    </div>
                    <div className="name same-field">
                        <input type="email" placeholder='Email' required />
                    </div>
                    <div className="name same-field">
                        <input type="text" placeholder='Phone No.' required />
                    </div>
                    <div className="name same-field">
                        <input type="text" placeholder='Subject' required />
                    </div>
                    <div className="textarea same-field">
                        <textarea name="message" placeholder='Message' required></textarea>
                    </div>
                    <button className='contact-btn' type='submit'>Submit</button>
                </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
