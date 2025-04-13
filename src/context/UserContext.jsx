import React, { createContext, useState, useEffect, useContext } from 'react';

// Maak een nieuwe context aan
const UserContext = createContext();

// Zorg ervoor dat je toegang hebt tot de UserContext in andere componenten
export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    useEffect(() => {
        if (token) {
            // Haal gebruiker op uit de backend met de token (optioneel)
            fetchUserFromToken();
        }
    }, [token]);

    const fetchUserFromToken = async () => {
        try {
            const response = await fetch('https://api.datavortex.nl/DinerApp/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'X-Api-Key': 'dinerapp:uEbEOa6jzCKItZLd8sod',
                },
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data.user); // Stel gebruiker in
            } else {
                console.error('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const login = (userData, token) => {
        setUser(userData);
        setToken(token);
        localStorage.setItem('token', token); // Opslaan van de token
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token'); // Verwijderen van de token
    };

    return (
        <UserContext.Provider value={{ user, token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
