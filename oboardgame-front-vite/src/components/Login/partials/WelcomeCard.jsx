import React from 'react';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const WelcomeCard = ({ className }) => {
  const navigate = useNavigate();

  return (
    <Card
      title="Bienvenue sur O'BoardGame"
      className={className}
      onClick={() => navigate('/')}
    >
      <p style={{ color: 'var(--color-text-secondary)' }}>
        Retrouvez, organisez et partagez votre collection de jeux de société en toute simplicité.
      </p>
      <ul className="info-list">
        <li>
          <i className="pi pi-check-circle" aria-hidden="true" style={{ color: 'var(--color-secondary)' }} />
          <span>Suivez vos jeux favoris et vos emprunts.</span>
        </li>
        <li>
          <i className="pi pi-check-circle" aria-hidden="true" style={{ color: 'var(--color-secondary)' }} />
          <span>Accédez à un catalogue régulièrement mis à jour.</span>
        </li>
        <li>
          <i className="pi pi-check-circle" aria-hidden="true" style={{ color: 'var(--color-secondary)' }} />
          <span>Profitez d'une interface accessible respectant les normes WCAG AA.</span>
        </li>
      </ul>
    </Card>
  );
};

WelcomeCard.propTypes = {
  className: PropTypes.string,
};

WelcomeCard.defaultProps = {
  className: '',
};

export default WelcomeCard;
