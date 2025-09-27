import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegisterCard = ({ className }) => {
  const navigate = useNavigate();

  return (
    <Card
      title="Première visite ?"
      className={className}
      onClick={() => navigate('/register')}
    >
      <p style={{ color: 'var(--color-text-secondary)' }}>
        Créez un compte pour rejoindre la communauté O'BoardGame et accéder à toutes les fonctionnalités.
      </p>
      <Button
        type="button"
        label="Créer un compte"
        icon="pi pi-user-plus"
        className="w-full mt-4 p-button-secondary"
        onClick={() => navigate('/register')}
      />
      <div className="help-box" role="note">
        <i className="pi pi-info-circle" aria-hidden="true" />
        <span>Besoin d'aide ? Contactez-nous à support@oboardgame.fr.</span>
      </div>
    </Card>
  );
};

RegisterCard.propTypes = {
  className: PropTypes.string,
};

RegisterCard.defaultProps = {
  className: '',
};

export default RegisterCard;
