import React from 'react'
import Dashboard from '../components/Dashboard'
import CreateUser from '../components/CreateUser'
import EditUser from '../components/EditUser'
import { Navigate } from 'react-router-dom'
import Home from '../components/Home'

const AppRoutes = [
    {
        path: '/dashboard',
        exact: true,
        element: <Dashboard/>
    },
    {
        path: '/create-user',
        exact: true,
        element: <CreateUser/>
    },
    {
        path: '/edit-user/:id',
        exact: true,
        element: <EditUser/>
    },
    {
        path: '/',
        exact: true,
        element: <Home/>
    },
    {
        path: '*',
        exact: false,
        element: <Navigate to='/'/>
    }
]

export default AppRoutes