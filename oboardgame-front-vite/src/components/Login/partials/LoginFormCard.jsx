import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';

const LoginFormCard = ({ 
  className, 
  email, 
  setEmail, 
  password, 
  setPassword, 
  handleSubmit, 
  loading, 
  localError 
}) => {
  return (
    <Card 
      title="Connexion" 
      className={className} 
      onClick={() => document.getElementById('email')?.focus()}
    >
      <form onSubmit={handleSubmit} className="login-form">
        <div className="field">
          <label htmlFor="email" className="block font-medium mb-2" style={{ color: 'var(--color-text)' }}>
            Email
          </label>
          <InputText
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            required
            className="w-full mb-3"
            disabled={loading}
          />
        </div>

        <div className="field">
          <label htmlFor="password" className="block font-medium mb-2" style={{ color: 'var(--color-text)' }}>
            Mot de passe
          </label>
          <Password
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Votre mot de passe"
            required
            toggleMask
            feedback={false}
            className="w-full mb-3"
            inputClassName="w-full"
            disabled={loading}
          />
        </div>

        {localError && (
          <div className="error-message">
            {localError}
          </div>
        )}

        <Button
          type="submit"
          label={loading ? 'Connexion en cours...' : 'Se connecter'}
          icon={loading ? 'pi pi-spin pi-spinner' : 'pi pi-sign-in'}
          className="w-full"
          disabled={loading}
        />
      </form>
    </Card>
  );
};

LoginFormCard.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  localError: PropTypes.string,
};

LoginFormCard.defaultProps = {
  className: '',
  localError: null,
};

export default LoginFormCard;
