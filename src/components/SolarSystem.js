import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

import './solarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <section data-testid="solar-system" className="conteiner-planet">
        <Title headline="Planetas" />
        <div className="content-planet">
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
