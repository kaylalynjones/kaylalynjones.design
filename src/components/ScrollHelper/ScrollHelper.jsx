import React from 'react';

import './scroll-helper.scss';

export default class ScrollHelper extends React.Component {
    render() {
        return (
            <div className='scroll-helper'>
                <i className='icon-chevron-down'></i>
            </div>
        );
    }
};

module.exports = ScrollHelper;
