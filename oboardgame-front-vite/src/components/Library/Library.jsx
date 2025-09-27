import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const navigate = useNavigate();
  
  // Données de démonstration
  const demoGames = [
    {
      id: 1,
      name: 'Dixit',
      description: 'Un jeu de cartes où l\'imagination est reine.',
      players: '3-6',
      playtime: '30 minutes',
      image: 'https://cf.geekdo-images.com/9Z6Z2Z2Z2Z2Z2Z2Z2Z2Q=/fit-in/246x300/pic6558920.jpg'
    },
    {
      id: 2,
      name: 'Catan',
      description: 'Le célèbre jeu de stratégie et de négociation.',
      players: '3-4',
      playtime: '60-90 minutes',
      image: 'https://cf.geekdo-images.com/9Z6Z2Z2Z2Z2Z2Z2Z2Z2Z2Q=/fit-in/246x300/pic2419375.jpg'
    },
    {
      id: 3,
      name: '7 Wonders',
      description: 'Construisez votre civilisation et émerveillez le monde.',
      players: '2-7',
      playtime: '30 minutes',
      image: 'https://cf.geekdo-images.com/9Z6Z2Z2Z2Z2Z2Z2Z2Z2Z2Q=/fit-in/246x300/pic860217.jpg'
    }
  ];

  const navigateToGame = (gameId) => {
    navigate(`/boardgames/${gameId}`);
  };

  return (
    <div className="p-4">
      <div className="mb-6 text-center">
        <h1>Bibliothèque de démonstration</h1>
        <p className="text-600">Connectez-vous pour gérer votre propre bibliothèque</p>
      </div>

      <div className="grid">
        {demoGames.map((game) => (
          <div key={game.id} className="col-12 md:col-4 mb-4">
            <Card 
              title={game.name}
              subTitle={`${game.players} joueurs • ${game.playtime}`}
              className="h-full"
              header={
                <div className="flex justify-content-center p-3">
                  <img 
                    src={game.image} 
                    alt={game.name} 
                    className="shadow-2 border-round" 
                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                  />
                </div>
              }
              footer={
                <div className="flex justify-content-end gap-2">
                  <Button 
                    label="Voir détails" 
                    icon="pi pi-search" 
                    className="p-button-text"
                    onClick={() => navigateToGame(game.id)}
                  />
                </div>
              }
            >
              <p className="m-0">{game.description}</p>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-600 mb-4">Vous souhaitez gérer votre propre collection ?</p>
        <Button 
          label="Se connecter" 
          icon="pi pi-user" 
          className="p-button-primary"
          onClick={() => navigate('/login')}
        />
      </div>
    </div>
  );
};
export default Library;
