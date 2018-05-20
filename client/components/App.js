import React from 'react';
import Filters from './Filters';
import AddFeedback from '../containers/AddFeedback';
import VisibleFeedback from '../containers/VisibleFeedback';

const App = () => (
    <div className="container">
        <Filters />
        <AddFeedback />
        <VisibleFeedback />
    </div>
);

export default App;
