import React from 'react';
import PropTypes from 'prop-types';
import { ChevronUp, MessageCircle } from 'react-feather';
import { StatusMap, FilterNames } from '../store/actions';

const Idea = ({ onClick, summary, details, category, status, upvotes, comments }) => (
    <li className="item">
        <div className="upvote">
            <ChevronUp color="#0050ff" />
            <h4>{upvotes}</h4>
        </div>
        <div className="details">
            <a className="link link-dark" role="presentation" onClick={onClick}><h6><span className="smoke@text">{category} :: </span>{summary}</h6></a>
            <p>{details}</p>
            <div className="meta">
                <ul className="list horizontal">
                    <li className="item status" type={StatusMap[status]}>
                        <small>{FilterNames[StatusMap[status]]}</small>
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
