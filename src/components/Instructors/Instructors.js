import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';


// instructors component 
const Instructors = () => {
    // Setting state 
    const [instructors, setInstructors] = useState([]);
    // loading data 
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
                    // loop for single instructor 
                    instructors.map(instructor => <Instructor instructor={instructor}
                        key={instructor.id}
                    ></Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;