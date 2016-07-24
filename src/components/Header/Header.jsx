import React from 'react';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Kayla Jones</h1>
        <h2>Interaction Designer | Front End Developer</h2>
      </div>
    );
  }
};

module.exports = Header;
