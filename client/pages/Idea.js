import React, { Component, Fragment } from 'react';
import Sidebar from '../containers/Sidebar';
import { Ideas } from '../Api';
import { StatusMap, FilterNames } from '../store/actions';
import IdeaAdmin from '../containers/IdeaAdmin';

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
                                <h4><span className="smoke@text">{idea.category} :: </span> {idea.summary}</h4>
                                <div className="status" type={StatusMap[idea.status]}>
                                    <small>{FilterNames[StatusMap[idea.status]]}</small>
                                </div>
                                <div className="admin">
                                    <IdeaAdmin idea={idea} />
                                </div>
                                <p>{idea.details}</p>
                            </Fragment>
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}
