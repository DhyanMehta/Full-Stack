import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProfileData({
                    username: response.data.username,
                    email: response.data.email,
                });
                setError('');
            } catch (error) {
                setError('Failed to load profile data');
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1 className="profile-title">Your Profile</h1>
            </div>

            <div className="profile-info-card">
                <div className="profile-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>

                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <>
                        <div className="info-group">
                            <div className="info-label">Username</div>
                            <div className="info-value">{profileData.username}</div>
                        </div>

                        <div className="info-divider" />

                        <div className="info-group">
                            <div className="info-label">Email</div>
                            <div className="info-value">{profileData.email}</div>
                        </div>

                        {error && <div className="error-message">{error}</div>}
                        {successMessage && <div className="success-message">{successMessage}</div>}

                        <div className="profile-actions">
                            <button className="action-button logout-button" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;