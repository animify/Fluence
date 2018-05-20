import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ onClick, completed, text }) => (
    <li className="item" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        <a role="presentation" onClick={onClick}> {text}</a>
    </li>
);

Feedback.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Feedback;
