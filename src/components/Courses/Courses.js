import React from 'react';
import '../Home/Home.css';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// courses component 
const Courses = (props) => {
    //    Destructuring 
    const { id, course_name, price, instructor, image, classes, hours } = props.course;
    const elementCheck = <FontAwesomeIcon icon={faCheck} />
    return (
        // single-course start
        <div className="single-course">
            <div className="image">
                <img src={image} alt="" />
            </div>
            {/* single-course information  */}
            <div className="information">
                <h4 className="prices">${price}</h4>
                <h5 className="title">{course_name}</h5>
                <p>By <span className="instructor">{instructor}</span></p>
                <p className="classes-hours">Class- {classes} & Hours- {hours}</p>
                <button className="know-more1">{elementCheck} Enroll Now</button>
            </div>
        </div>
    );
};
export default Courses;