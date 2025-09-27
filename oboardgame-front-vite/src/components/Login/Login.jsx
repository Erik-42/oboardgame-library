import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ProgressSpinner } from 'primereact/progressspinner';
import { loginUser } from '../../middlewares/user_middleware';
import PropTypes from 'prop-types';
import WelcomeCard from './partials/WelcomeCard';
import LoginFormCard from './partials/LoginFormCard';
import RegisterCard from './partials/RegisterCard';

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
    <div className="login-page">
      <div className="cards-grid">
        <WelcomeCard className="info-card clickable-card" />
        <LoginFormCard 
          className="login-card clickable-card" 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleSubmit={handleSubmit} 
          loading={loading} 
          localError={localError} 
        />
        <RegisterCard className="support-card clickable-card" />
      </div>

      <style jsx>{`
        .login-page {
          height: calc(100vh - var(--header-height) - (var(--spacing-lg) * 2));
          padding: var(--spacing-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-background);
          overflow: hidden;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--spacing-lg);
          width: 100%;
          max-width: 1080px;
        }

        .info-card,
        .login-card,
        .support-card {
          background-color: var(--color-surface);
          box-shadow: var(--shadow);
          border: 1px solid var(--color-border);
          position: relative;
        }

        .clickable-card {
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .clickable-card:hover,
        .clickable-card:focus-within {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary);
        }

        .clickable-card:active {
          transform: translateY(-2px);
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .info-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-text-secondary);
        }

        .info-list i {
          color: var(--color-secondary);
          font-size: 1rem;
        }

        .error-message {
          color: var(--color-error);
          background-color: var(--color-card);
          padding: 0.75rem;
          border-radius: 6px;
          border: 1px solid var(--color-border);
        }

        .support-card .help-box {
          margin-top: var(--spacing-md);
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--color-text-secondary);
          background-color: var(--color-card);
          border-radius: 6px;
          padding: var(--spacing-sm);
          border: 1px solid var(--color-border);
        }

        .support-card .help-box i {
          color: var(--color-info);
          font-size: 1.1rem;
        }

        @media (max-width: 1200px) {
          .cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .login-page {
            padding: var(--spacing-md);
            height: auto;
            min-height: calc(100vh - var(--header-height));
            overflow-y: auto;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }
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
