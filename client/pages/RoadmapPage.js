import React, { Fragment } from 'react';
import Sidebar from '../containers/Sidebar';
import { Ideas } from '../Api';
import { setIdeas, StatusFilters } from '../store/actions';
import store from '../store';
import Roadmap from '../containers/Roadmap';

const RoadmapPage = () => {
    Ideas.get().then((ideas) => {
        store.dispatch(setIdeas(ideas.reverse()));
    });

    return (
        <Fragment>
            <Sidebar />
            <div className="layout">
                <div className="container">
                    <h2>Roadmap</h2>
                    <div className="row">
                        <div className="col-12@t col-4@m">
                            <div className="planned column">
                                <h6>Planned</h6>
                                <Roadmap filter={StatusFilters.SHOW_PLANNED} />
                            </div>
                        </div>
                        <div className="col-12@t col-4@m">
                            <div className="in-progress column">
                                <h6>In Progress</h6>
                                <Roadmap filter={StatusFilters.SHOW_IN_PROGRESS} />
                            </div>
                        </div>
                        <div className="col-12@t col-4@m">
                            <div className="complete column">
                                <h6>Complete</h6>
                                <Roadmap filter={StatusFilters.SHOW_COMPLETED} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default RoadmapPage;
