import React from 'react';
import './Instructor.css';

const Instructor = (props) => {
    const { id, expertise_on, students, instructor, reviews, image } = props.instructor;
    return (
        <div className="single-service">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="information">

                <h4 className="title">{instructor}</h4>
                <h5 className="prices">{expertise_on}</h5>
                <p>Students - <span className="instructor">{students}  </span>  Reviews - <span className="instructor">{reviews}  </span></p>
                <button className="know-more1">Know More</button>
            </div>
        </div>
    );
};

export default Instructor;