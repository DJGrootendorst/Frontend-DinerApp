import React from 'react';
import './StartPage.css';
import { Link } from 'react-router-dom';

const StartPage = () => {
    return (
        <div className="start-container">
            <h1>Welkom bij ReceptenApp</h1>
            <p>Maak een account aan of log in om verder te gaan.</p>
            <div className="button-group">
                <Link to="/register" className="btn">Registreren</Link>
                <Link to="/login" className="btn">Inloggen</Link>
            </div>
        </div>
    );
};

export default StartPage;
