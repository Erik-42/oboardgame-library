import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const LoginPrompt = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 text-center">
      <p className="mb-4">Vous souhaitez gérer votre propre collection ?</p>
      <Button 
        label="Se connecter" 
        icon="pi pi-user" 
        onClick={() => navigate('/login')}
      />
    </div>
  );
};

export default LoginPrompt;
