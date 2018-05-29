import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Idea from './Idea';

const Ideas = ({ ideas, toggleIdea }) => (
    <Fragment>
        <ul className="list styled">
            {ideas.length > 0 ? ideas.map(idea =>
                <Idea key={idea._id} {...idea} onClick={() => toggleIdea(idea._id)} />
            ) :
                <p>No ideas in here yet.</p>}
        </ul>
    </Fragment>
);

Ideas.propTypes = {
    ideas: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            status: PropTypes.number.isRequired,
            upvotes: PropTypes.number.isRequired,
            comments: PropTypes.array.isRequired,
            details: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleIdea: PropTypes.func.isRequired
};

export default Ideas;
