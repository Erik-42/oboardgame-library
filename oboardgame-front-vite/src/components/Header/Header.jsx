import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { classNames } from 'primereact/utils';

const Header = () => {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  // Utilisateur par défaut pour le mode sans connexion
  const user = { name: 'Invité' };

  // Mise à jour de l'état mobile lors du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setSidebarVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = () => {
    navigate('/login');
    setSidebarVisible(false);
  };

  const navigateTo = (path) => {
    navigate(path);
    setSidebarVisible(false);
  };

  // Liens de navigation
  const navItems = [
    { label: 'Accueil', icon: 'pi pi-home', path: '/' },
    { label: 'Bibliothèque', icon: 'pi pi-book', path: '/library' },
    { label: 'Rechercher', icon: 'pi pi-search', path: '/search' },
    { label: 'À propos', icon: 'pi pi-info-circle', path: '/about' },
  ];

  return (
    <header className="header shadow-2 w-full fixed top-0 z-5" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="flex justify-content-between align-items-center px-4 h-4rem">
        <div className="flex align-items-center">
          <Button
            icon="pi pi-bars"
            className="p-button-text p-button-rounded p-button-lg mr-3"
            onClick={() => setSidebarVisible(true)}
          />
          <Link to="/" className="no-underline">
            <h1 className="text-3xl font-bold m-0" style={{ color: 'var(--color-primary)' }}>
              O'BoardGame
            </h1>
          </Link>
        </div>

        <div className="flex align-items-center">
          {!isMobile && (
            <div className="flex align-items-center">
              <span className="mr-3">Bonjour, {user.name}</span>
              <Button
                label="Connexion"
                className="p-button-text p-button-lg"
                onClick={handleLogin}
              />
            </div>
          )}
        </div>
      </div>

      {/* Sidebar pour mobile */}
      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        className="w-15rem"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div className="flex flex-column h-full">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <div className="flex flex-column">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  label={item.label}
                  icon={item.icon}
                  className="p-button-text p-button-lg justify-content-start mb-2"
                  onClick={() => navigateTo(item.path)}
                />
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <div className="mb-3">Mode invité</div>
            <Button
              label="Se connecter"
              icon="pi pi-user"
              className="w-full"
              onClick={handleLogin}
            />
          </div>
        </div>
      </Sidebar>
    </header>
  );
};

export default Header;
