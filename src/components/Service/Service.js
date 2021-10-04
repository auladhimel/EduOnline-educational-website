import React from 'react';
// service component 
const Service = (props) => {
    // Destructuring 
    const { id, course_name, price, instructor, rating, reviews, image, classes, hours } = props.course;
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
                <p className="classes-hours">Classes- {classes} & Hours- {hours}</p>
                <p>Reviews-{reviews} Ratings-{rating}</p>
                <button className="know-more1">Enroll Now</button>
            </div>
        </div >
    );
};

export default Service;