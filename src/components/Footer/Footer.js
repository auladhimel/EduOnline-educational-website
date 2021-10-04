import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk, faAddressCard, faFax, faInbox, faVoicemail, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
// footer component 
const Footer = () => {
    // Icons 
    const elementPhone = <FontAwesomeIcon icon={faPhone} />
    const elementMail = <FontAwesomeIcon icon={faMailBulk} />
    const elementAddressCard = <FontAwesomeIcon icon={faAddressCard} />
    const elementFax = <FontAwesomeIcon icon={faFax} />
    const elementInbox = <FontAwesomeIcon icon={faInbox} />
    const elementVoice = <FontAwesomeIcon icon={faVoicemail} />
    const elementEnvelope = <FontAwesomeIcon icon={faEnvelopeOpenText} />
    return (
        <section className="footer-section">
            <div className="footer">
                {/* about us part  */}
                <div>
                    <h3>About Us</h3>
                    <p>We are the pioneer to launch the First-ever Online Support Center for Everyone absolutely Free. Our online and offline learning platforms along with the support platforms will help one learn technology and creative skills to achieve personal and professional goals. Students can enroll in our courses from anywhere in the world and have access to our wide range of services.</p>
                    <div><h3>{elementFax} &nbsp; {elementInbox} &nbsp;{elementEnvelope} &nbsp;{elementVoice}</h3></div>
                </div>

                {/* company part  */}
                <div>
                    <h3>Company</h3>
                    <div>
                        <ul>
                            {/* links */}
                            <li><NavLink to="/home"> About Us</NavLink></li>
                            <li><NavLink to="/home"> Contact Us</NavLink></li>
                            <li><NavLink to="/home"> Projects</NavLink></li>
                            <li><NavLink to="/home"> Terms & Condition</NavLink></li>
                            <li><NavLink to="/home"> Privacy policy</NavLink></li>
                        </ul>
                    </div>
                </div>
                {/* courses part  */}
                <div>
                    <h3>Courses</h3>
                    <div>
                        <ul>
                            {/* links */}
                            <li><NavLink to="/home"> SEO Business</NavLink></li>
                            <li><NavLink to="/home"> Digital Marketing</NavLink></li>
                            <li><NavLink to="/home"> Graphic Design</NavLink></li>
                            <li><NavLink to="/home"> Site Development</NavLink></li>
                            <li><NavLink to="/home"> Social Marketing</NavLink></li>
                        </ul>
                    </div>
                </div>
                {/* Contact part  */}
                <div>
                    <h3>Contact</h3>
                    <div>
                        <ul>
                            <li>
                                <h4>{elementPhone} Phone Number</h4>
                                <p>0178732986</p>
                            </li>
                            <li>
                                <h4>{elementMail} Email Address</h4>
                                <p>email@gmail.com</p>
                            </li>
                            <li>
                                <h4>{elementAddressCard} Office Address</h4>
                                <p>Dhaka , Bangladesh</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p style={{ color: '#d4d0d0', paddingBottom: '20px' }}>@ Copyright Reserved To Aulad Himel - 2021</p>
        </section >
    );
};

export default Footer;