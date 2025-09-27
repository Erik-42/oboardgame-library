import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Home = () => {
  console.log('Composant Home rendu');

  return (
    <div className="grid">
      <div className="col-12">
        <div className="text-center mb-5">
          <h1 className="text-6xl font-bold text-white mb-3">Bienvenue sur O'BoardGame</h1>
          <p className="text-xl text-white line-height-3">
            Découvrez notre collection de jeux de société et gérez votre ludothèque personnelle.
          </p>
        </div>
      </div>

      <div className="col-12 md:col-4">
        <Card title="Votre bibliothèque" className="h-full">
          <p className="mt-0 mb-4">
            Découvrez et gérez votre collection personnelle de jeux de société. Ajoutez des jeux, notez-les et suivez vos parties.
          </p>
          <Link to="/library">
            <Button label="Accéder à la bibliothèque" icon="pi pi-book" className="p-button-outlined" />
          </Link>
        </Card>
      </div>

      <div className="col-12 md:col-4">
        <Card title="Découvrir des jeux" className="h-full">
          <p className="mt-0 mb-4">
            Explorez notre base de données de jeux de société. Trouvez de nouveaux jeux à essayer et à ajouter à votre collection.
          </p>
          <Link to="/boardgames">
            <Button label="Explorer les jeux" icon="pi pi-search" className="p-button-outlined" />
          </Link>
        </Card>
      </div>

      <div className="col-12 md:col-4">
        <Card title="Rechercher" className="h-full">
          <p className="mt-0 mb-4">
            Recherchez des jeux par nom, éditeur, durée ou nombre de joueurs. Trouvez le jeu parfait pour votre soirée jeux.
          </p>
          <Link to="/search">
            <Button label="Rechercher" icon="pi pi-search" className="p-button-outlined" />
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;
