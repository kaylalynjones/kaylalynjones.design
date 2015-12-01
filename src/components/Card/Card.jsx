import React from 'react';
import Header from '../Header/Header.jsx';
import Info from '../Info/Info.jsx';
import './card.scss';

export default class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <div className="front">
            <Header />
          </div>
          <div className="back">
            <Info />
          </div>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
};

module.exports = Card;
