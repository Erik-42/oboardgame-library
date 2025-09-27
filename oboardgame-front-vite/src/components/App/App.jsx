import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ProgressSpinner } from 'primereact/progressspinner';
import InstallPWA from "../InstallPWA/InstallPWA.jsx";
import { fetchUser } from "../../actions/user_actions";
import Error404 from "../Error404/Error404.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Register from "../Register/Register.jsx";
import Library from "../Library/Library.jsx";
import Header from "../Header/Header.jsx";
import Home from "../Home/Home.jsx";
import BoardGames from "../BoardGames/BoardGames.jsx";
import Search from "../Search/Search.jsx";
import About from "../About/About.jsx";
// Core CSS - suppression des thèmes par défaut pour utiliser notre palette personnalisée
import 'primereact/resources/primereact.min.css';
// Icons
import 'primeicons/primeicons.css';
// PrimeFlex CSS
import 'primeflex/primeflex.css';

// Composant pour protéger les routes privées
const PrivateRoute = ({ children }) => {
  const { logged } = useSelector((state) => state.user);
  const location = useLocation();

  if (!logged) {
    // Rediriger vers la page de connexion avec l'URL de redirection
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// Composant pour les mises en page avec en-tête
const Layout = ({ children }) => (
  <div className="layout-wrapper">
    <Header />
    <main className="p-4">
      {children}
    </main>
  </div>
);

function App() {
  // Désactivation temporaire de l'authentification
  const isAuthenticated = true;
  const user = { name: 'Utilisateur invité' };

  console.log('Application démarrée sans authentification');

  // Suppression de l'initialisation de l'utilisateur
  useEffect(() => {
    console.log('Application initialisée');
  }, []);

  return (
    <div className="app-container">
      <InstallPWA />
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boardgames" element={<BoardGames />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <style jsx global>{`
        .app-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden; // Empêche le scroll sur le conteneur principal
        }
        .app-main {
          flex-grow: 1; // Prend tout l'espace restant
          overflow-y: auto; // Ajoute un scroll si le contenu dépasse
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}

export default App;
