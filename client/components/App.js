import React from 'react';
import Filters from './Filters';
import NewIdea from '../containers/NewIdea';
import VisibleIdeas from '../containers/VisibleIdeas';

const App = () => (
    <div className="container">
        <Filters />
        <NewIdea />
        <VisibleIdeas />
    </div>
);

export default App;
