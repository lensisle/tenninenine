import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectionScreenStats extends Component {
  static propTypes = {
    description: PropTypes.string,
    agility: PropTypes.number,
    life: PropTypes.number,
    damage: PropTypes.number,
    defense: PropTypes.number,
    inventory: PropTypes.number,
  };

  renderStat(quantity) {
    return [...Array(quantity).keys()].map(el => (
      <div key={el} className="selection-screen-stat-box" />
    ));
  }

  render() {
    const { life, damage, defense, inventory, agility } = this.props;
    return (
      <div className="selection-screen-stats">
        <div className="selection-screen-stat-container">
          <div className="selection-screen-stat-label">Life</div>
          {this.renderStat(life)}
        </div>
        <div className="selection-screen-stat-container">
          <div className="selection-screen-stat-label">Inventory</div>
          {this.renderStat(inventory)}
        </div>
        <div className="selection-screen-stat-container">
          <div className="selection-screen-stat-label">Damage</div>
          {this.renderStat(damage)}
        </div>
        <div className="selection-screen-stat-container">
          <div className="selection-screen-stat-label">Defense</div>
          {this.renderStat(defense)}
        </div>
        <div className="selection-screen-stat-container">
          <div className="selection-screen-stat-label">Agility</div>
          {this.renderStat(agility)}
        </div>
      </div>
    );
  }
}

export default SelectionScreenStats;
