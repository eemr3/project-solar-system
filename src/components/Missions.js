import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

import './missions.css';

class Missions extends Component {
  render() {
    return (
      <section data-testid="missions" className="container-mission">
        <Title headline="Missões" />
        <div className="content-mission">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Missions;
