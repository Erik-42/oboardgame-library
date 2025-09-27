import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ProgressSpinner } from 'primereact/progressspinner';
import { loginUser } from '../../middlewares/user_middleware';
import PropTypes from 'prop-types';

const Login = ({ onSuccess, onError, redirectTo = '/' }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState(null);
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (error && onError) {
      onError(error);
      setLocalError(error);
    } else {
      setLocalError(null);
    }
  }, [error, onError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    
    try {
      const result = await dispatch(loginUser({ email, password }));
      
      if (loginUser.fulfilled.match(result)) {
        if (onSuccess) {
          onSuccess(result.payload);
        }
        const from = location.state?.from?.pathname || redirectTo;
        navigate(from, { replace: true });
      } else if (loginUser.rejected.match(result) && onError) {
        onError(result.error.message || 'Erreur de connexion');
      }
    } catch (err) {
      console.error('Erreur inattendue:', err);
      if (onError) {
        onError('Une erreur inattendue est survenue. Veuillez réessayer.');
      }
    }
  };

  return (
    <div className="login-container">
      <Card 
        title="Connexion" 
        className="login-card"
      >
        <form onSubmit={handleSubmit} className="login-form">
          <div className="field">
            <label htmlFor="email" className="block text-900 font-medium mb-2">
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
            <label htmlFor="password" className="block text-900 font-medium mb-2">
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

          <div className="register-link">
            <span className="text-600">Pas encore de compte ? </span>
            <a 
              href="/register" 
              className="text-primary font-medium no-underline hover:underline"
              onClick={(e) => {
                e.preventDefault();
                navigate('/register');
              }}
            >
              S'inscrire
            </a>
          </div>
        </form>
      </Card>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: var(--surface-ground);
          padding: 1rem;
        }
        
        .login-card {
          width: 100%;
          max-width: 28rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .error-message {
          color: #f87171;
          background-color: #fef2f2;
          padding: 0.75rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          border: 1px solid #fecaca;
        }
        
        .register-link {
          text-align: center;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--surface-border);
        }
      `}</style>
    </div>
  );
};

Login.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  redirectTo: PropTypes.string,
};

export default Login;
