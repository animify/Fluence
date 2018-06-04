import React, { Fragment } from 'react';
import Sidebar from '../containers/Sidebar';
import { Ideas } from '../Api';
import { viewIdea } from '../store/actions';
import store from '../store';
import VisibleIdea from '../containers/VisibleIdea';

const IdeaPage = ({ match }) => {
    Ideas.getOne(match.params.idea).then((i) => {
        store.dispatch(viewIdea(i));
    });

    return (
        <Fragment>
            <Sidebar />
            <div className="layout">
                <div className="container">
                    <VisibleIdea />
                </div>
            </div>
        </Fragment>
    );
};

export default IdeaPage;
