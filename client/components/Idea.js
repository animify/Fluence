import React from 'react';
import PropTypes from 'prop-types';
import { ChevronUp } from 'react-feather';

const Idea = ({ onClick, summary, details, category, status, upvotes, comments }) => (
    <li className="item">
        <div className="upvote">
            <ChevronUp color="#0050ff" />
            <h4>{upvotes}</h4>
        </div>
        <div className="details">
            <a className="link link-dark" role="presentation" onClick={onClick}><h5>{summary}</h5></a>
            <p>{details}</p>
            <div className="meta">
                <ul className="list horizontal">
                    <li className="item">
                        <small><strong>{comments.length}</strong> comments</small>
                    </li>
                    <li className="item">
                        <small>{status}</small>
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
    summary: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired,
};

export default Idea;
