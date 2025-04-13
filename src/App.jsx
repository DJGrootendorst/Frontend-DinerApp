import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import SearchPage from './pages/Search/SearchPage';
import MyRecipesPage from './pages/MyRecipes/MyRecipesPage';
import RecipeDetails from './components/RecipeDetails';
import MainLayout from './components/MainLayout';

function App() {
    return (
        <Routes>
            {/* Default route (home pagina) */}
            <Route path="/" element={<HomePage />} />

            {/* Home pagina */}
            <Route path="/home" element={<HomePage />} />

            {/* Zoekpagina */}
            <Route path="/search" element={<SearchPage />} />

            {/* Mijn recepten pagina */}
            <Route path="/my-recipes" element={<MyRecipesPage />} />

            {/* Recept details pagina - dynamisch met :id */}
            <Route path="/recipes/:id" element={<RecipeDetails />} />

            {/* Andere pagina's kunnen hier worden toegevoegd */}
        </Routes>
    );
}

export default App;
