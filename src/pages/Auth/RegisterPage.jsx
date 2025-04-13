import React, { useState } from 'react';
import { registerUser } from '../../api/auth';

function RegisterPage() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await registerUser(form);
            setSuccess('Registratie gelukt!');
            console.log(result);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Registreren</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Gebruikersnaam" onChange={handleChange} />
                <input name="email" type="email" placeholder="E-mailadres" onChange={handleChange} />
                <input name="password" type="password" placeholder="Wachtwoord" onChange={handleChange} />
                <button type="submit">Registreer</button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default RegisterPage;