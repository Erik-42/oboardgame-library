import React from 'react';
import PropTypes from 'prop-types';
import BoardGameCard from './BoardGameCard';

const BoardGameList = ({ games }) => {
  if (!games || games.length === 0) {
    return <p>Aucun jeu à afficher.</p>;
  }

  return (
    <div className="grid">
      {games.map(game => (
        <div key={game.id} className="col-12 md:col-6 lg:col-4">
          <BoardGameCard game={game} />
        </div>
      ))}
    </div>
  );
};

BoardGameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // Ajoutez d'autres proptypes pour les jeux ici
  })).isRequired,
};

export default BoardGameList;
