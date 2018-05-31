import React, { Component, Fragment } from 'react';
import Sidebar from '../containers/Sidebar';
import { Ideas } from '../Api';

export default class Idea extends Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        console.log('params', this.props.match.params.idea);
        Ideas.getOne(this.props.match.params.idea).then((idea) => {
            this.setState({ idea });
        });
    }

    render() {
        const { idea } = this.state;

        return (
            <Fragment>
                <Sidebar />
                <div className="layout">
                    <div className="container">
                        {idea &&
                            <Fragment>
                                <h4>{idea.summary}</h4>
                                <p>{idea.details}</p>
                            </Fragment>
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}
