import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Login from '../../components/Login/Login';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSuccess = (userData) => {
    // Redirection après connexion réussie
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  const handleError = (error) => {
    // Les erreurs sont déjà gérées dans le composant Login
    console.error('Erreur de connexion:', error);
  };

  return (
    <Login 
      onSuccess={handleSuccess}
      onError={handleError}
      redirectTo="/"
    />
  );
};

export default LoginPage;
