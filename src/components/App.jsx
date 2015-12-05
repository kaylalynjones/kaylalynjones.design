import React from 'react';
import Card from './Card/Card.jsx';
import './app.scss';

export default class App extends React.Component {
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
    return (
      <div className="app" style={{height:window.innerHeight * 3 + 'px'}}>
        <Card scrollPosition={this.state.scrollPosition} />
      </div>
    );
  }
};

module.exports = App;
