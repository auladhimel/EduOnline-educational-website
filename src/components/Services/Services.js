import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import '../Service/Service.css';

const Services = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (

        <div className="online-courses">
            <p><span className="trending">ONLINE COURSES</span></p>
            <h1> <span className="popular">Learn new skills</span></h1>
            <div className="banner-body">
            </div>
            <div className="Service-container">

                {
                    courses.map(course => <Service course={course}
                        key={course.id}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;