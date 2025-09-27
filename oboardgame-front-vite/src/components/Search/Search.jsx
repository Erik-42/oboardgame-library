import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    players: null,
    duration: null,
    difficulty: null
  });

  const players = [
    { label: '1 joueur', value: 1 },
    { label: '2 joueurs', value: 2 },
    { label: '3-4 joueurs', value: '3-4' },
    { label: '5+ joueurs', value: '5+' }
  ];

  const durations = [
    { label: 'Moins de 30 min', value: '30' },
    { label: '30 min - 1h', value: '30-60' },
    { label: '1h - 2h', value: '60-120' },
    { label: 'Plus de 2h', value: '120+' }
  ];

  const difficulties = [
    { label: 'Facile', value: 'easy' },
    { label: 'Intermédiaire', value: 'medium' },
    { label: 'Expert', value: 'hard' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implémenter la logique de recherche ici
    console.log('Recherche:', { searchTerm, ...filters });
  };

  return (
    <div className="grid">
      <div className="col-12">
        <Card title="Rechercher un jeu">
          <form onSubmit={handleSearch} className="p-fluid">
            <div className="p-field mb-4">
              <span className="p-float-label">
                <InputText 
                  id="search" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
                <label htmlFor="search">Nom du jeu, éditeur, auteur...</label>
              </span>
            </div>

            <div className="grid">
              <div className="col-12 md:col-4">
                <span className="p-float-label">
                  <Dropdown
                    id="players"
                    value={filters.players}
                    options={players}
                    onChange={(e) => setFilters({...filters, players: e.value})}
                    className="w-full"
                    showClear
                  />
                  <label htmlFor="players">Nombre de joueurs</label>
                </span>
              </div>

              <div className="col-12 md:col-4">
                <span className="p-float-label">
                  <Dropdown
                    id="duration"
                    value={filters.duration}
                    options={durations}
                    onChange={(e) => setFilters({...filters, duration: e.value})}
                    className="w-full"
                    showClear
                  />
                  <label htmlFor="duration">Durée</label>
                </span>
              </div>

              <div className="col-12 md:col-4">
                <span className="p-float-label">
                  <Dropdown
                    id="difficulty"
                    value={filters.difficulty}
                    options={difficulties}
                    onChange={(e) => setFilters({...filters, difficulty: e.value})}
                    className="w-full"
                    showClear
                  />
                  <label htmlFor="difficulty">Difficulté</label>
                </span>
              </div>
            </div>

            <div className="flex justify-content-end mt-4">
              <Button 
                type="submit" 
                label="Rechercher" 
                icon="pi pi-search" 
                className="p-button-primary"
              />
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Search;
