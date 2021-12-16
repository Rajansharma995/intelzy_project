import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {
    return localStorage.getItem('walletAddress') ? children : <Navigate to='/'/>
}

export default ProtectedRoute
