import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const LibraryGameCard = ({ game }) => {
  const navigate = useNavigate();

  const navigateToGame = (gameId) => {
    navigate(`/boardgames/${gameId}`);
  };

  const header = (
    <div className="flex justify-content-center p-3">
      <img 
        src={game.image} 
        alt={game.name} 
        className="shadow-2 border-round" 
        style={{ maxWidth: '200px', maxHeight: '200px' }}
      />
    </div>
  );

  const footer = (
    <div className="flex justify-content-end gap-2">
      <Button 
        label="Voir détails" 
        icon="pi pi-search" 
        className="p-button-outlined"
        onClick={() => navigateToGame(game.id)}
      />
    </div>
  );

  return (
    <Card 
      title={game.name}
      subTitle={`${game.players} joueurs • ${game.playtime}`}
      className="h-full"
      header={header}
      footer={footer}
    >
      <p className="m-0">{game.description}</p>
    </Card>
  );
};

LibraryGameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    playtime: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default LibraryGameCard;
