import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    Box,
    Paper,
    Button,
    Avatar
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Get username from localStorage or JWT token
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const payload = JSON.parse(window.atob(base64));
                setUsername(payload.username || 'User');
            } catch (error) {
                console.error('Error parsing token:', error);
                setUsername('User');
            }
        }
    }, []);

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome back, {username}!
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4 }}>
                Manage your profile and account settings
            </Typography>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar sx={{ width: 56, height: 56, mb: 2, bgcolor: 'primary.main' }}>
                        <PersonIcon />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                        Your Profile
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        View and update your personal information
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/profile')}
                    >
                        View Profile
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Dashboard;