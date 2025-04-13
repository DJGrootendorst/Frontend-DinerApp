import React, { useState } from 'react';
import { useUserContext } from '../../context/UserContext'; // Import de context
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useUserContext(); // Haal login-functie op uit context
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api.datavortex.nl/DinerApp/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'dinerapp:uEbEOa6jzCKItZLd8sod',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                login(data.user, data.token); // Gebruiker inloggen en token opslaan
                navigate('/home'); // Navigeer naar homepagina bij succes
            } else {
                setError(data.message || 'Inloggen mislukt');
            }
        } catch (err) {
            setError('Er is een fout opgetreden bij het inloggen.');
        }
    };

    return (
        <div>
            <h2>Inloggen</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="E-mailadres"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Wachtwoord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Inloggen</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default LoginPage;
