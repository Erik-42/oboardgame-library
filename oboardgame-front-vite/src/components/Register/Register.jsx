import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../actions/user_actions';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const Register = () => {
  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.pseudo.trim()) {
      newErrors.pseudo = 'Le pseudo est requis';
    }
    
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      try {
        const result = await dispatch(register(formData));
        
        if (register.fulfilled.match(result)) {
          console.log('Inscription réussie');
          // Rediriger vers la page de connexion
          navigate('/login');
        } else if (register.rejected.match(result)) {
          console.error('Erreur lors de l\'inscription:', result.error.message || 'Erreur inconnue');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-d-flex p-jc-center p-ai-center" style={{ minHeight: '100vh' }}>
      <Card 
        title="Créer un compte"
        className="p-shadow-10"
      >
        <form onSubmit={handleSubmit} className="p-fluid">
          <div className="p-field p-mb-3">
            <label htmlFor="pseudo" className="p-d-block p-mb-2">
              Pseudo <span className="p-error">*</span>
            </label>
            <InputText
              id="pseudo"
              name="pseudo"
              value={formData.pseudo}
              onChange={handleChange}
              className={`p-d-block ${errors.pseudo ? 'p-invalid' : ''}`}
              required
            />
            {errors.pseudo && <small className="p-error">{errors.pseudo}</small>}
          </div>
          
          <div className="p-field p-mb-3">
            <label htmlFor="email" className="p-d-block p-mb-2">
              Email <span className="p-error">*</span>
            </label>
            <InputText
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`p-d-block ${errors.email ? 'p-invalid' : ''}`}
              required
            />
            {errors.email && <small className="p-error">{errors.email}</small>}
          </div>
          
          <div className="p-field p-mb-3">
            <label htmlFor="password" className="p-d-block p-mb-2">
              Mot de passe <span className="p-error">*</span>
            </label>
            <Password
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              toggleMask
              className={`p-d-block ${errors.password ? 'p-invalid' : ''}`}
              feedback={false}
              required
            />
            {errors.password && <small className="p-error">{errors.password}</small>}
          </div>
          
          <div className="p-field p-mb-4">
            <label htmlFor="confirmPassword" className="p-d-block p-mb-2">
              Confirmer le mot de passe <span className="p-error">*</span>
            </label>
            <Password
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              toggleMask
              className={`p-d-block ${errors.confirmPassword ? 'p-invalid' : ''}`}
              feedback={false}
              required
            />
            {errors.confirmPassword && <small className="p-error">{errors.confirmPassword}</small>}
          </div>
          
          <Button 
            type="submit" 
            label={loading ? 'Inscription en cours...' : 'S\'inscrire'} 
            className="p-d-block w-100" 
            loading={loading}
            disabled={loading}
          />
          
          <div className="p-text-center p-mt-3">
            <p>Déjà inscrit ? <Link to="/login">Se connecter</Link></p>
          </div>
        </form>
      </Card>
    </div>
    );
  };
  
  export default Register;
