import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Idea from './Idea';

const RoadmapColumn = ({ ideas, account }) => (
    <Fragment>
        <ul className="list styled">
            {ideas.length > 0 ? ideas.map(idea =>
                <Idea compact key={idea._id} account={account} {...idea} />
            ) :
                <p>No ideas in here yet.</p>}
        </ul>
    </Fragment>
);

RoadmapColumn.propTypes = {
    ideas: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            status: PropTypes.number.isRequired,
            votes: PropTypes.array.isRequired,
            comments: PropTypes.array.isRequired,
            details: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    account: PropTypes.object.isRequired,
};

export default RoadmapColumn;
