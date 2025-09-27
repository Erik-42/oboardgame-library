import React from 'react';
import FilterPanel from './partials/FilterPanel';
import BoardGameList from './partials/BoardGameList';

const mockGames = [
  {
    id: 1,
    name: 'Catan',
    image_url: 'https://cf.geekdo-images.com/W3_Mgie2bS_1db_W2Mv2oQ__itemrep/img/So0-25-2l1f_A-sR_1aT3l1-s0=__itemrep/img/So0-25-2l1f_A-sR_1aT3l1-s0=__itemrep/img/So0-25-2l1f_A-sR_1aT3l1-s0=__itemrep/img/So0-25-2l1f_A-sR_1aT3l1-s0=__itemrep/img/So0-25-2l1f_A-sR_1aT3l1-s0=__itemrep/img/So0-25-2l1f_A-sR_1aT3l1-s0=/catan-board-game.jpg',
    min_players: 3,
    max_players: 4,
    min_playtime: 60,
    max_playtime: 120,
    description_preview: 'Collectez des ressources et construisez des colonies pour devenir le maître de Catan.',
  },
  {
    id: 2,
    name: 'Ticket to Ride',
    image_url: 'https://cf.geekdo-images.com/ZWJg0dC6s2i2dE5A7wVqHQ__itemrep/img/x2L2dM8v2q-V40a3c_z_A-sR_1aT3l1-s0=__itemrep/img/x2L2dM8v2q-V40a3c_z_A-sR_1aT3l1-s0=__itemrep/img/x2L2dM8v2q-V40a3c_z_A-sR_1aT3l1-s0=__itemrep/img/x2L2dM8v2q-V40a3c_z_A-sR_1aT3l1-s0=__itemrep/img/x2L2dM8v2q-V40a3c_z_A-sR_1aT3l1-s0=__itemrep/img/x2L2dM8v2q-V40a3c_z_A-sR_1aT3l1-s0=/ticket-to-ride.jpg',
    min_players: 2,
    max_players: 5,
    min_playtime: 30,
    max_playtime: 60,
    description_preview: 'Collectionnez des cartes de wagons pour prendre le contrôle des chemins de fer reliant les villes des États-Unis.',
  },
  {
    id: 3,
    name: '7 Wonders',
    image_url: 'https://cf.geekdo-images.com/RvFVTE5C-iV1s_s_p_u_A-sR_1aT3l1-s0=__itemrep/img/RvFVTE5C-iV1s_s_p_u_A-sR_1aT3l1-s0=__itemrep/img/RvFVTE5C-iV1s_s_p_u_A-sR_1aT3l1-s0=__itemrep/img/RvFVTE5C-iV1s_s_p_u_A-sR_1aT3l1-s0=__itemrep/img/RvFVTE5C-iV1s_s_p_u_A-sR_1aT3l1-s0=__itemrep/img/RvFVTE5C-iV1s_s_p_u_A-sR_1aT3l1-s0=/7-wonders.jpg',
    min_players: 2,
    max_players: 7,
    min_playtime: 30,
    max_playtime: 30,
    description_preview: 'Dirigez une des sept grandes cités du monde antique. Exploitez les ressources naturelles de vos terres, participez à la marche en avant du progrès, développez vos relations commerciales et affirmez votre suprématie militaire.',
  },
];

const BoardGames = () => {
  return (
    <div className="grid">
      <div className="col-12 md:col-3">
        <FilterPanel />
      </div>
      <div className="col-12 md:col-9">
        <BoardGameList games={mockGames} />
      </div>
    </div>
  );
};

export default BoardGames;
