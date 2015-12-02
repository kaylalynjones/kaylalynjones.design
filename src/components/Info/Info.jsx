import React from 'react';
import ResumeLink from '../ResumeLink/ResumeLink.jsx';
import './info.scss';

export default class Info extends React.Component {
  render() {
    return (
      <section className="info">
        <h4 className="info-temp__header align-center">Kayla Jones</h4>
        <h4 className="info__header light-text align-center">Front End Developer | Interaction Designer</h4>
        <section className="info__block">
          <div className="info__block__resume">
            <ResumeLink />
          </div>
          <div className="info__block__links">
            <p>
              <a href="https://twitter.com/grandtraipse"
                target="_blank"
                className="icon-twitter">
                Twitter &nbsp;
              </a>
            </p>
            <p>
              <a href="http://codepen.io/kaylalynjones/"
                target="_blank"
                className="icon-codepen">
                Codepen &nbsp;
              </a>
            </p>
            <p>
              <a href="https://github.com/kaylalynjones"
                target="_blank"
                className="icon-github">
                Github &nbsp;
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/kaylalynjones"
                target="_blank"
                className="icon-linkedin">
                LinkedIn &nbsp;
              </a>
            </p>
          </div>
        </section>
      </section>
    );
  }
};

module.exports = Info;
