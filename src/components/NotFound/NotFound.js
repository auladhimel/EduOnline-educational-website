import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/home');

    }

    return (
        <div className="not-found">
            <h1>404</h1>
            <h5>Try using the button below to go to main of the site</h5>
            <button onClick={handleClick} className="button" >Back To Home Page</button>
        </div>
    );
};

export default NotFound;

