import React from 'react';
import './MyRecipesPage.css';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';

const MyRecipesPage = () => {
    const myRecipes = [
        { id: 5, title: 'Pannenkoeken' },
        { id: 6, title: 'Pizza Margherita' },
    ];

    return (
        <MainLayout>
            <h2>Mijn recepten</h2>
            <ul className="recipe-list">
                {myRecipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/my-recipes/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
};

export default MyRecipesPage;
