import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './Instructors.css';

const Instructors = () => {


    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('./instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="online-courses">
            <p><span className="trending">INSTRUCTORS</span></p>
            <h1><span className="popular">Our World Class Mentor</span></h1>
            <div className="instrutor-container">

                {
                    instructors.map(instructor => <Instructor instructor={instructor}
                        key={instructor.id}
                    ></Instructor>)
                }

            </div>
        </div>
    );
};

export default Instructors;