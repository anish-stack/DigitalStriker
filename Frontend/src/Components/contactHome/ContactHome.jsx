import React from 'react'
import './contact.css'

function ContactHome() {
    return (
        <div className='form-section'>
            <div className="container">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="topic">Address</div>
                            <div className="text-one">E-148, Mangolpuri Industrial area phase 2 pocket e</div>
                            <div className="text-two">New Delhi 110034( INDIA )</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Phone</div>
                            <div className="text-one">+91 8447168967</div>
                            <div className="text-two">+91 9999780986</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div>
                            <div className="text-one">baijnath.p@digitalstriker.in</div>
                            <div className="text-one">deepak.a@digitalstriker.in</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>If you have any work from me or any types of quries related to Our Product, you can send me message from here. It's my pleasure to help you.</p>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div className="input-box message-box">
                                <textarea placeholder='Enter your message' />
                            </div>
                            <div className="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHome
