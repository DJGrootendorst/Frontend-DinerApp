import React, { useState } from 'react';
import './SearchPage.css';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const recipes = [
        { id: 3, title: 'Lasagne' },
        { id: 4, title: 'Caesar Salad' },
    ];

    const filtered = recipes.filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <MainLayout>
            <h2>Zoeken</h2>
            <input
                type="text"
                placeholder="Zoek een recept..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="recipe-list">
                {filtered.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/search/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
};

export default SearchPage;
