import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';  // Zorg ervoor dat je een CSS-bestand hebt voor styling
import axios from 'axios';  // Voor het ophalen van gegevens van een API
import MainLayout from '../components/MainLayout';  // Aangenomen dat MainLayout zich in de components map bevindt

const RecipeDetails = () => {
    const { id } = useParams();  // Haalt het ID van het recept op uit de URL
    const [recipe, setRecipe] = useState(null);  // Houdt de opgehaalde receptgegevens bij
    const [loading, setLoading] = useState(true);  // Houdt de laadstatus bij
    const [error, setError] = useState(null);  // Houdt eventuele foutmeldingen bij

    // Effect om de gegevens op te halen zodra de component is geladen
    useEffect(() => {
        // Stel je voor dat je de API hebt die receptgegevens ophaalt via het recept-ID
        const fetchRecipeData = async () => {
            try {
                const response = await axios.get(`https://api.datavortex.nl/DinerApp/recipes/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': 'dinerapp:uEbEOa6jzCKItZLd8sod',
                    }
                });
                setRecipe(response.data);  // Zet de gegevens in de state
                setLoading(false);  // Zet de laadstatus op false
            } catch (error) {
                setError('Er is een fout opgetreden bij het ophalen van de receptgegevens.');
                setLoading(false);
            }
        };

        fetchRecipeData();
    }, [id]);  // Het effect wordt opnieuw uitgevoerd als het recept-ID verandert

    if (loading) {
        return <p>Loading...</p>;  // Toon een laadbericht als de gegevens nog worden opgehaald
    }

    if (error) {
        return <p>{error}</p>;  // Toon een foutbericht als er iets mis is gegaan
    }

    return (
        <MainLayout>
            <div className="recipe-details">
                <h2>{recipe.name}</h2> {/* Receptnaam */}
                <p><strong>Categorie:</strong> {recipe.category}</p> {/* Receptcategorie */}
                <p><strong>Ingrediënten:</strong></p>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <p><strong>Bereidingswijze:</strong></p>
                <p>{recipe.instructions}</p> {/* Bereidingsinstructies */}
                {/* Eventueel kun je hier ook een afbeelding toevoegen */}
                {recipe.image && <img src={recipe.image} alt={recipe.name} />}
            </div>
        </MainLayout>
    );
};

export default RecipeDetails;
