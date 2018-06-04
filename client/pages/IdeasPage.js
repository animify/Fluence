import React, { Fragment } from 'react';
import Filters from '../Components/Filters';
import VisibleIdeas from '../containers/VisibleIdeas';
import Sidebar from '../containers/Sidebar';
import store from '../store';
import { setIdeas } from '../store/actions';
import { Ideas } from '../Api';

const IdeasPage = () => {
    Ideas.get().then((ideas) => {
        store.dispatch(setIdeas(ideas.reverse()));
    });

    return (
        <Fragment>
            {/* <Nav /> */}
            <Sidebar />
            <div className="layout">
                <div className="container">
                    <h2>Feature Requests</h2>
                    <Filters />
                    <main>
                        <VisibleIdeas />
                    </main>
                </div>
            </div>
        </Fragment>
    );
};

export default IdeasPage;
