import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

const Error404 = () => {
  const navigate = useNavigate();

  const header = (
    <div className="p-d-flex p-jc-center p-ai-center p-p-4">
      <h1 className="p-text-center" style={{ fontSize: '6rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>404</h1>
    </div>
  );

  const footer = (
    <div className="p-d-flex p-flex-column p-ai-center p-pt-3">
      <Button 
        label="Retour à l'accueil" 
        icon="pi pi-home" 
        className="p-button-primary p-mb-2"
        onClick={() => navigate('/')}
      />
      <Button 
        label="Page précédente" 
        icon="pi pi-arrow-left" 
        className="p-button-text"
        onClick={() => navigate(-1)}
      />
    </div>
  );

  return (
    <div className="p-d-flex p-jc-center p-ai-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Card 
        title="Page non trouvée" 
        subTitle="Désolé, la page que vous recherchez n'existe pas ou a été déplacée."
        header={header}
        footer={footer}
        className="p-shadow-10"
        style={{ width: '100%', maxWidth: '500px', margin: '1rem' }}
      >
        <div className="p-text-center p-p-4">
          <p className="p-mb-4">
            Il semble que vous ayez suivi un lien incorrect ou que la page ait été supprimée.
            Voici quelques liens utiles :
          </p>
          <div className="p-d-flex p-flex-column p-ai-center">
            <Button 
              label="Bibliothèque" 
              icon="pi pi-book" 
              className="p-button-text p-mb-2"
              onClick={() => navigate('/')}
            />
            <Button 
              label="Se connecter" 
              icon="pi pi-sign-in" 
              className="p-button-text p-mb-2"
              onClick={() => navigate('/login')}
            />
            <Button 
              label="Créer un compte" 
              icon="pi pi-user-plus" 
              className="p-button-text"
              onClick={() => navigate('/register')}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Error404;
