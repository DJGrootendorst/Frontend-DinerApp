// Hoofdcomponent met routing
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import RecipeDetails from './components/RecipeDetails';
import MainLayout from './components/MainLayout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<MainLayout><HomePage /></MainLayout>} />
                <Route path="/recipes/:id" element={<RecipeDetails />} />
                {/* Andere routes */}
            </Routes>
        </Router>
    );
}

export default App;
