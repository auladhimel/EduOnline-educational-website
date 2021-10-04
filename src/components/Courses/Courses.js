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
                <h3 className="prices">${price}</h3>
                <h4 className="title">{course_name}</h4>
                <p>By <span className="instructor">{instructor}</span></p>
                <p>Reviews:{reviews} Ratings:{rating}</p>
            </div>
        </div>



    );
};

export default Courses;