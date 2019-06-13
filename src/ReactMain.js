import React, { Component } from 'react'
import config from './config.json';

class ReactMain extends Component {
    render() {
        return (
            <div>
                {config.MeeageReact}
            </div>
        );
    }
}

export default ReactMain