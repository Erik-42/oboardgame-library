import React from 'react';
import LibraryHeader from './partials/LibraryHeader';
import LibraryGameCard from './partials/LibraryGameCard';
import LoginPrompt from './partials/LoginPrompt';

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

const Library = () => {
  return (
    <div className="p-4">
      <LibraryHeader />
      <div className="grid">
        {demoGames.map((game) => (
          <div key={game.id} className="col-12 md:col-4 mb-4">
            <LibraryGameCard game={game} />
          </div>
        ))}
      </div>
      <LoginPrompt />
    </div>
  );
};
export default Library;
