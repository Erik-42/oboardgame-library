import React from 'react';
import { Card } from 'primereact/card';

const BoardGames = () => {
  return (
    <div className="grid">
      <div className="col-12">
        <Card title="Tous les jeux">
          <p>Liste des jeux de société disponibles.</p>
          {/* Ici, nous ajouterons la liste des jeux plus tard */}
        </Card>
      </div>
    </div>
  );
};

export default BoardGames;
