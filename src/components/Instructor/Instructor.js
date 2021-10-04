import React from 'react';
import './Instructor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
// instructor component 
const Instructor = (props) => {
    const { id, expertise_on, students, instructor, reviews, image } = props.instructor;
    // icons 
    const elementCheck = <FontAwesomeIcon icon={faCheck} />
    const elementUser = <FontAwesomeIcon icon={faUser} />
    const elementStar = <FontAwesomeIcon icon={faStar} />
    return (
        // single service start 
        <div className="single-service">
            <div className="image">
                <img src={image} alt="" />
            </div>
            {/* single service information  */}
            <div className="information">
                <h4 className="title">{instructor}</h4>
                <h5 className="prices">{expertise_on}</h5>
                <p style={{ color: '#F2B827', fontWeight: 'bold' }}>{elementUser} {students}  &nbsp; &nbsp;{elementStar} {reviews}  </p>
                <button className="know-more1"> {elementCheck} Know More</button>
            </div>
        </div>
    );
};
export default Instructor;