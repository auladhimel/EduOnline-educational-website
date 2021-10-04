import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="online-courses">


            <div className="about-text">
                <div className="about-info">
                    <h6><span className="trending">ABOUT US</span></h6>
                    <h1> <span className="popular">Who We Are</span></h1>
                    <p>We are the pioneer to launch the First-ever Online Support Center for Everyone absolutely Free. Our online and offline learning platforms along with the support platforms will help one learn technology and creative skills to achieve personal and professional goals. Students can enroll in our courses from anywhere in the world and have access to our wide range of services. With the help of our active, dedicated, committed and passionate Team of Professionals, develop his/her skills and build a good rapport for thyself and also a freelancer can find the best freelance working opportunities as well as can maintain good affinity with one’s customers and clients by building a strong portfolio.</p>
                    <button className="know-more1">Know More</button>
                </div>
                <div className="about-image">
                    <img src="https://www.freshbooks.com/blog/wp-content/uploads/2017/08/collaboration-1.jpg" alt="" />
                </div>


            </div>

            <div className="about-text">
                <div className="about-image">
                    <img src="https://ifamagazine.com/wp-content/uploads/2020/12/getty_951514270_400405.jpg" alt="" />
                </div>
                <div className="about-info">
                    <h6><span className="trending">ABOUT MENTORS</span></h6>
                    <h1> <span className="popular">Our World Class Mentor</span></h1>
                    <p>
                        With combined experience of over 20 years in the industry, we at here help students, leaders, IT and design pros, project managers—anyone in any role—develop web development, creative, and business skills. The mentors at here is well trained. Our senior trainers have a vast experience of teaching as well as hand on experience. We expect our trainers to resolve student’s queries on the spot and help them become professionals.</p>
                    <button className="know-more2">Know More</button>
                </div>



            </div>


        </div>
    );
};

export default About;