const API_BASE_URL = 'https://api.datavortex.nl/DinerApp';
const API_KEY = 'dinerapp:uEbEOa6jzCKItZLd8sod';

// Registreren
export async function registerUser({ username, email, password }) {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': API_KEY,
        },
        body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Registratie mislukt');
    }

    return data;
}