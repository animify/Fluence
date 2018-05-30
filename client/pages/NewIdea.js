import React, { Fragment } from 'react';
import NewIdeaForm from '../containers/NewIdeaForm';
import Ideas from '../Api/Ideas';
import Sidebar from '../containers/Sidebar';

const NewIdea = () => (
    <Fragment>
        <Sidebar />
        <div className="layout">
            <div className="container">
                <h2>New Idea</h2>
                <p>Thought of something awesome? Share it with the team at Fluence.</p>
                <main>
                    <NewIdeaForm onSubmit={Ideas.new} />
                </main>
            </div>
        </div>
    </Fragment>
);

export default NewIdea;
