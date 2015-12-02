import React from 'react';

import './resume-link.scss';

export default class ResumeLink extends React.Component {
  render() {
    return (
      <a href="images/kayla_jones_resume.pdf" className="svg-container" target="_blank">
        <object className="my-svg" type="image/svg+xml" data="/images/resume-icon.svg">
          <img src="/images/resume-icon.png" alt="resume icon and link" />
        </object>
        <span>Resume</span>
      </a>
    );
  }
};

module.exports = ResumeLink;
