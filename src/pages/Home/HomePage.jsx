import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';

const HomePage = () => {
    const dummyRecipes = [
        { id: 1, title: 'Spaghetti Bolognese' },
        { id: 2, title: 'Kip Tandoori' },
    ];

    return (
        <MainLayout>
            <h2>Home</h2>
            <p>Welkom terug! Bekijk hieronder een aantal recepten:</p>
            <ul className="recipe-list">
                {dummyRecipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/home/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
};

export default HomePage;
