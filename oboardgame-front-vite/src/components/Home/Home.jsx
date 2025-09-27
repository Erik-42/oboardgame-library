import React from 'react';
import HomeHero from './partials/HomeHero';
import FeatureCard from './partials/FeatureCard';

const features = [
  {
    title: "Votre bibliothèque",
    description: "Découvrez et gérez votre collection personnelle de jeux de société. Ajoutez des jeux, notez-les et suivez vos parties.",
    linkTo: "/library",
    icon: "pi pi-book",
    buttonLabel: "Accéder à la bibliothèque"
  },
  {
    title: "Découvrir des jeux",
    description: "Explorez notre base de données de jeux de société. Trouvez de nouveaux jeux à essayer et à ajouter à votre collection.",
    linkTo: "/boardgames",
    icon: "pi pi-search",
    buttonLabel: "Explorer les jeux"
  },
  {
    title: "Rechercher",
    description: "Recherchez des jeux par nom, éditeur, durée ou nombre de joueurs. Trouvez le jeu parfait pour votre soirée jeux.",
    linkTo: "/search",
    icon: "pi pi-search",
    buttonLabel: "Rechercher"
  }
];

const Home = () => {
  console.log('Composant Home rendu');

  return (
    <div className="home-page">
      <div className="grid">
        <HomeHero />
        {features.map(feature => (
          <FeatureCard 
            key={feature.title} 
            title={feature.title} 
            description={feature.description} 
            linkTo={feature.linkTo} 
            icon={feature.icon} 
            buttonLabel={feature.buttonLabel} 
          />
        ))}
      </div>
      <style jsx>{`
        .home-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%; // Prend 100% de la hauteur du parent (.app-main)
        }
        .grid {
          width: 100%;
          max-width: var(--container-max-width);
        }
      `}</style>
    </div>
  );
};

export default Home;
