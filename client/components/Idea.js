import React from 'react';
import PropTypes from 'prop-types';

const Idea = ({ onClick, completed, title, text, category }) => (
    <li className="item">
        <div className="upvote">
            <h4>342</h4>
            <a>Upvote</a>
        </div>
        <div className="details">
            <a role="presentation" onClick={onClick}><h5 className="base@text">{title}</h5></a>
            <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</p>
            <div className="meta">
                <ul className="list horizontal">
                    <li className="item">
                        <small><strong>11</strong> comments</small>
                    </li>
                    <li className="item">
                        <small>{category}</small>
                    </li>
                    <li className="item">
                        <small><a>Flag as innappropriate</a></small>
                    </li>
                </ul>
            </div>
        </div>
    </li>
);

Idea.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
};

export default Idea;
