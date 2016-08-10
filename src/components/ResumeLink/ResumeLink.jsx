import React from 'react';

import './resume-link.scss';

export default class ResumeLink extends React.Component {
    render() {
        return (
            <a href="resume.pdf" className="resume-link" target="_blank">
                Check out my Resume
            </a>
        );
    }
};

module.exports = ResumeLink;
