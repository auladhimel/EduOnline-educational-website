import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';
// Not Dound component 
const NotFound = () => {
    // redirecting to home page 
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }
    return (
        // not found page text 
        <div className="not-found">
            <h1>404</h1>
            <h4>Oops ! Sorry We Can't Find That Page.
            </h4>
            <p>Take a moment and Try using the button below to go to main of the site</p>
            {/* event handler for button click */}
            <button onClick={handleClick} className="button" >Back To Home Page</button>
        </div>
    );
};

export default NotFound;

