import React, { Fragment } from 'react';
import Filters from '../Components/Filters';
import PostIdeaButton from '../Components/PostIdeaButton';
import Nav from '../containers/Nav';
import VisibleIdeas from '../containers/VisibleIdeas';
import PostIdeaModal from '../Components/PostIdeaModal';

const App = () => (
    <Fragment>
        <Nav />
        <div className="layout">
            <div className="container">
                <h2>Feature Requests</h2>
                <Filters />
                <main className="row flex">
                    <aside className="col-4@l order-2 order-1@m">
                        <PostIdeaButton />
                    </aside>
                    <section className="col-8@l order-1 order-2@m">
                        <VisibleIdeas />
                    </section>
                </main>
            </div>
        </div>
        <div className="modals">
            <PostIdeaModal />
        </div>
    </Fragment>
);

export default App;
