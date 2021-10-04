import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
// service component 
const Service = (props) => {
    // Destructuring 
    const { id, course_name, price, instructor, rating, reviews, image, classes, hours } = props.course;
    // icons 
    const elementCheck = <FontAwesomeIcon icon={faCheck} />
    const elementUser = <FontAwesomeIcon icon={faUser} />
    const elementStar = <FontAwesomeIcon icon={faStar} />
    return (
        // single service start
        < div className="single-service" >
            <div className="image">
                <img src={image} alt="" />
            </div>
            {/* single service text  */}
            <div className="information">
                <h3 className="prices">${price}</h3>
                <h4 className="title">{course_name}</h4>
                <p>By <span className="instructor">{instructor}</span></p>
                <p className="classes-hours">Classes- {classes} &nbsp; &nbsp; Hours- {hours}</p>
                <p style={{ color: '#F2B827' }}>{elementUser}&nbsp;{reviews} &nbsp; &nbsp;{elementStar}&nbsp;{rating}</p>
                <button className="know-more1">{elementCheck} Enroll Now</button>
            </div>
        </div >
    );
};

export default Service;