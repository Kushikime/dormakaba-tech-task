import { Dashboard } from '@mui/icons-material';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './hooks';
import Details from './pages/Details';
import Login from './pages/Login';
import { ProtectedRoute } from './pages/ProtectedRoute';

export const RoutesWrapper: React.FC = () => {

    const authorized = useAppSelector((state) => state.user.authorized);

    if (authorized && window.location.pathname !== '/') {
        return <Navigate to='/' />;
    }

    return (
        <Routes>
            <Route
                key='dashboard-route'
                path='/'
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                key='details-route'
                path='/'
                element={
                    <ProtectedRoute>
                        <Details />
                    </ProtectedRoute>
                }
            />
            <Route
                key='login-route'
                path='/login'
                element={
                    <Login />
                }
            />
        </Routes>
    )
}