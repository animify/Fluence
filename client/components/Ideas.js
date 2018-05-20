import React from 'react';
import PropTypes from 'prop-types';
import Idea from './Idea';

const Ideas = ({ ideas, toggleIdea }) => (
    <ul className="list styled">
        {ideas.map(idea =>
            <Idea key={idea.id} {...idea} onClick={() => toggleIdea(idea.id)} />
        )}
    </ul>
);

Ideas.propTypes = {
    ideas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleIdea: PropTypes.func.isRequired
};

export default Ideas;
