import React from 'react';
import ResumeLink from '../ResumeLink/ResumeLink.jsx';
import './info.scss';

export default class Info extends React.Component {
    render() {
        return (
            <section className="info">
                <a href="https://www.linkedin.com/in/kaylalynjones" target="_blank">
                    <i className="icon-linkedin"></i>
                    &nbsp;LinkedIn
                </a>
                <a href="https://github.com/kaylalynjones" target="_blank">
                    <i className="icon-github"></i>
                    &nbsp;Github
                </a>
                <a href="http://codepen.io/kaylalynjones/" target="_blank">
                    <i className="icon-codepen"></i>
                    &nbsp;Codepen
                </a>
            </section>
        );
    }
};

module.exports = Info;
