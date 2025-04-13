import React from 'react';
import MainLayout from '../../components/MainLayout'; // Zorg ervoor dat de MainLayout ook correct wordt geïmporteerd
import RecipeDetails from '../../components/RecipeDetails';

const RecipeDetailsFromHome = () => {
    return (
        <MainLayout>
            <RecipeDetails />
        </MainLayout>
    );
};

export default RecipeDetailsFromHome;
