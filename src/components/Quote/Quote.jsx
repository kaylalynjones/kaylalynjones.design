import React from 'react';
import './quote.scss';

export default class Quote extends React.Component {
    render() {
        return (
            <section className="quote">
                <h3>Design is not just what it looks like and feels like. Design is how it works.</h3>
                <h4>- Steve Jobs</h4>
            </section>
        );
    }
};

module.exports = Quote;
