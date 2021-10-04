import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import '../Service/Service.css';
// services component 
const Services = () => {
    // setting state for services component 
    const [courses, setCourses] = useState([]);
    // loading data for courses page 
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
                    // looping for getting single course component 
                    courses.map(course => <Service course={course}
                        key={course.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};
export default Services;