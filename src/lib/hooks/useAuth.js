import { useState } from "react";


export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() =>
        !!localStorage.getItem('token') // or some auth state
    );

    const login = () => {
        localStorage.setItem('token', 'demo-token')
        setIsAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout };
}


