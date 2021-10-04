import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="footer">
                <div>
                    <h3>About Us</h3>
                    <p>
                        We are the pioneer to launch the First-ever Online Support Center for Everyone absolutely Free. Our online and offline learning platforms along with the support platforms will help one learn technology and creative skills to achieve personal and professional goals. Students can enroll in our courses from anywhere in the world and have access to our wide range of services.</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <div>
                        <ul>
                            <li><NavLink to="/home"> About Us</NavLink></li>
                            <li><NavLink to="/home"> Contact Us</NavLink></li>
                            <li><NavLink to="/home"> Projects</NavLink></li>
                            <li><NavLink to="/home"> Terms & Condition</NavLink></li>
                            <li><NavLink to="/home"> Privacy policy</NavLink></li>

                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Courses</h3>
                    <div>
                        <ul>
                            <li><NavLink to="/home"> SEO Business</NavLink></li>
                            <li><NavLink to="/home"> Digital Marketing</NavLink></li>
                            <li><NavLink to="/home"> Graphic Design</NavLink></li>
                            <li><NavLink to="/home"> Site Development</NavLink></li>
                            <li><NavLink to="/home"> Social Marketing</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Contact</h3>
                    <div>
                        <ul>
                            <li>
                                <h4>Phone Number</h4>
                                <p>0178732986</p>
                            </li>
                            <li>
                                <h4>Email Address</h4>
                                <p>email@gmail.com</p>
                            </li>
                            <li>
                                <h4>Office Address</h4>
                                <p>Dhaka , Bangladesh</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>@ Copyright reserved to Aulad Himel-2021</p>
        </section>
    );
};

export default Footer;