import React from 'react';
import '../Home/Home.css';
import './Courses.css';

const Courses = (props) => {
    console.log(props.course);
    const { id, course_name, price, instructor, rating, reviews, image } = props.course;
    return (

        <div className="single-course">
            <div className="image">
                <img src={image} alt="" />

            </div>
            <div className="information">
                <h4 className="prices">${price}</h4>
                <h5 className="title">{course_name}</h5>
                <p>By <span className="instructor">{instructor}</span></p>
                <button className="know-more1">Enroll Now</button>
            </div>
        </div>



    );
};

export default Courses;