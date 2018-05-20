import React, { Fragment } from 'react';
import Filters from './Filters';
import PostIdeaButton from './PostIdeaButton';
import Nav from '../containers/Nav';
import NewIdea from '../containers/NewIdea';
import VisibleIdeas from '../containers/VisibleIdeas';
import PostIdeaModal from './PostIdeaModal';

const App = () => (
    <Fragment>
        <Nav />
        <div className="layout">
            <div className="container">
                <div className="row">
                    <aside className="col-12@t col-3@m">
                        <PostIdeaButton />
                        <Filters />
                    </aside>
                    <main className="col-12@t col-9@m">
                        <VisibleIdeas />
                    </main>
                </div>
            </div>
        </div>
        <div className="modals">
            <PostIdeaModal />
        </div>
    </Fragment>
);

export default App;
