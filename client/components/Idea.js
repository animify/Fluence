import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'react-feather';
import { StatusMap, StatusText } from '../store/actions';
import store from '../store';

const Idea = ({ account, _id, summary, details, category, status, votes, comments }) => (
    <li className="item">
        <div className={votes.find(v => account._id === v.by) ? 'upvote upvoted' : 'upvote'}>
            <ChevronUp />
            <h6>{votes.length}</h6>
        </div>
        <div className="details">
            <Link to={`/ideas/${_id}`} className="link link-dark" role="presentation"><h6><span className="smoke@text">{category} :: </span>{summary}</h6></Link>
            <p>{details}</p>
            <div className="meta">
                <ul className="list horizontal">
                    <li className="item status" type={StatusMap[status]}>
                        <small>{StatusText[StatusMap[status]]}</small>
                    </li>
                </ul>
            </div>
        </div>
    </li >
);

Idea.propTypes = {
    _id: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    votes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    account: PropTypes.object.isRequired,
};

export default Idea;
