// Herbruikbare UI-componenten
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/MainLayout.css'; // Zorg ervoor dat het bestand correct is

const MainLayout = ({ children }) => {
    return (
        <div className="layout">
            <nav className="navbar">
                <Link to="/home">Home</Link>
                <Link to="/search">Zoeken</Link>
                <Link to="/my-recipes">Mijn recepten</Link>
            </nav>
            <main className="content">
                {children} {/* De pagina-inhoud komt hier */}
            </main>
        </div>
    );
};

export default MainLayout;

