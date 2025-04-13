import React from 'react';
import ReactDOM from 'react-dom/client'; // Voor React 18 en verder
import './index.css'; // Eventueel een CSS bestand voor je applicatie
import App from './App'; // Dit is je hoofdcomponent
import { BrowserRouter } from 'react-router-dom'; // Voor routing (indien van toepassing)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
