import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

// Maak een context voor authenticatie
export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuth: false,  // Gebruiker is niet ingelogd
        user: null,     // Geen gebruikersinformatie
        status: 'pending',  // Status van authenticatie
    });

    const navigate = useNavigate();

    // MOUNTING EFFECT
    useEffect(() => {
        // Haal de JWT op uit localStorage
        const token = localStorage.getItem('token');

        // Als er een token is, haal dan de gebruikersdata op
        if (token) {
            const decoded = jwtDecode(token);
            fetchUserData(decoded.sub, token);  // Haal gebruikersdata op met de gebruiker-ID
        } else {
            setAuthState({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    // Loginfunctie (waarbij JWT-token wordt opgeslagen)
    const login = async (token) => {
        localStorage.setItem('token', token); // Zet token in localStorage
        const decoded = jwtDecode(token);
        await fetchUserData(decoded.sub, token, '/home'); // Haal gebruikersdata op en navigeer naar de homepagina
    };

    // Logoutfunctie (waarbij je alles wist uit localStorage)
    const logout = () => {
        localStorage.removeItem('token');
        setAuthState({
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate('/'); // Navigeer naar de startpagina
    };

    // Functie om de gebruikersdata op te halen
    const fetchUserData = async (id, token, redirectUrl = '') => {
        try {
            const result = await axios.get(`https://api.datavortex.nl/DinerApp/user/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    'X-Api-Key': 'dinerapp:uEbEOa6jzCKItZLd8sod',
                },
            });

            // Zet de gebruikersgegevens in de state
            setAuthState({
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });

            // Als er een redirect URL is, navigeer hiernaartoe
            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (error) {
            console.error(error);
            setAuthState({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    };

    // Context data die we willen delen met andere componenten
    const contextData = {
        ...authState,
        login,
        logout,
    };

    // Return de AuthContext.Provider met de benodigde waarde
    return (
        <AuthContext.Provider value={contextData}>
            {authState.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;