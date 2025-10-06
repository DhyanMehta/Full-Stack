import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-brand">
                    Auth Portal
                </a>
                <div className="navbar-links">
                    {isAuthenticated ? (
                        <>
                            <a href="/dashboard" className="nav-link">
                                Dashboard
                            </a>
                            <a href="/profile" className="nav-link">
                                Profile
                            </a>
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <a href="/login" className="nav-link">
                                Login
                            </a>
                            <a href="/register" className="nav-link">
                                Register
                            </a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;