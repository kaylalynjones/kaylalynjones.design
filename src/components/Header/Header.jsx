import React from 'react';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="title-svg-container">
        <object className="title-svg" type="image/svg+xml" data="/images/kayla-jones.svg">
          <img src="/images/kayla-jones.png" alt="resume icon and link" />
        </object>
      </div>
    );
  }
};

module.exports = Header;
