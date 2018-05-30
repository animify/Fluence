import React, { Fragment } from 'react';
import Filters from '../Components/Filters';
import VisibleIdeas from '../containers/VisibleIdeas';
import Sidebar from '../containers/Sidebar';

const App = () => (
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

export default App;
