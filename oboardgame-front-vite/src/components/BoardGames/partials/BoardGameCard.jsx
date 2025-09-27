import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';

const BoardGameCard = ({ game }) => {
  const header = (
    <img 
      alt={game.name} 
      src={game.image_url || 'https://via.placeholder.com/300x200.png?text=No+Image'} 
      style={{ height: '200px', objectFit: 'cover' }} 
    />
  );

  const footer = (
    <span>
      <Button label="Détails" icon="pi pi-search" className="p-button-sm" />
      <Button label="Ajouter" icon="pi pi-plus" className="p-button-sm p-button-success ml-2" />
    </span>
  );

  return (
    <Card 
      title={game.name}
      subTitle={`${game.min_players}-${game.max_players} joueurs | ${game.min_playtime}-${game.max_playtime} min`}
      header={header}
      footer={footer}
      className="h-full"
    >
      <p className="m-0" style={{ height: '60px', overflow: 'hidden' }}>
        {game.description_preview || 'Pas de description disponible.'}
      </p>
    </Card>
  );
};

BoardGameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    min_players: PropTypes.number,
    max_players: PropTypes.number,
    min_playtime: PropTypes.number,
    max_playtime: PropTypes.number,
    description_preview: PropTypes.string,
  }).isRequired,
};

export default BoardGameCard;
