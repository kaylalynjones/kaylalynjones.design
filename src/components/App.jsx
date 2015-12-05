import React from 'react';
import Card from './Card/Card.jsx';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Card />
      </div>
    );
  }
};

module.exports = App;
