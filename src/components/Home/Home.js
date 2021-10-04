import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Home.css';


const Home = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (

        <section>
            <div className="banner-part">
                <Container>
                    <Row>
                        <Col md={7}>
                            <p><span className="expert">EXPERT INSTRUCTION</span></p>
                            <h1>Online Coaching <br /> Lessons Remote <br /> Learning</h1>
                            <p>Learn new skills to go ahead for your career. A best and cheapest way of getting know learning in online to make a better tomorrow. We make your children’s future better
                            </p>
                            <InputGroup className="input">
                                <FormControl className="form"
                                    placeholder="What do you want to learn?"
                                    aria-label="Recipient's username with two button addons"
                                />
                                <button className="search-button" >Search</button>
                            </InputGroup>

                        </Col>
                        <Col md={5}>
                            <img className="banner-image" src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/2020-09/programming.jpg" alt="" />
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className="online-courses">
                <p><span className="trending">TRENDING COURSES</span></p>
                <h1><span className="popular">Our Popular Online Course</span></h1>
                <div className="course-container">

                    {
                        courses.map(course => <Courses course={course}
                            key={course.id}
                        ></Courses>)
                    }

                </div>

            </div>
        </section>

    );
};

export default Home;