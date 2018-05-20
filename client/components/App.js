import React from 'react';
import Filters from './Filters';
import Nav from '../containers/Nav';
import NewIdea from '../containers/NewIdea';
import VisibleIdeas from '../containers/VisibleIdeas';

const App = () => (
    <div className="container">
        <Nav />
        <Filters />
        <NewIdea />
        <VisibleIdeas />
    </div>
);

export default App;
