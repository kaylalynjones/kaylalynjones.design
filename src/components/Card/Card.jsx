import React from 'react';
import Header from '../Header/Header.jsx';
import Info from '../Info/Info.jsx';
import './card.scss';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollPosition: 0 };
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.setState({scrollPosition: window.scrollY });
  }

  render() {
    // x, y, z, deg
    var scrollHeight = window.innerHeight * 3;
    var ratio = this.state.scrollPosition / scrollHeight;
    console.log( ratio );

    var cardTransform = {
      transform: `rotate3d(0, 1, 0, ${this.state.scrollPosition}deg)`
    }

    return (
      <div className="card-container">
        <div className="card" style={cardTransform}>
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
