import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'react-feather';
import { StatusMap, StatusText } from '../store/actions';
import store from '../store';

const Idea = ({ account, _id, summary, details, category, status, votes, comments, compact }) => (
    <li className="item">
        <div className={votes.find(v => account._id === v.by) ? 'upvote upvoted' : 'upvote'}>
            <ChevronUp />
            <h6>{votes.length}</h6>
        </div>
        <div className="details">
            <Link to={`/ideas/${_id}`} className="link link-dark" role="presentation"><h6><span className="smoke@text">{category} :: </span>{summary}</h6></Link>
            {!compact && <Fragment>
                <p>{details}</p>
                <div className="meta">
                    <ul className="list horizontal">
                        <li className="item status" type={StatusMap[status]}>
                            <small>{StatusText[StatusMap[status]]}</small>
                        </li>
                    </ul>
                </div>
            </Fragment>}
        </div>
    </li >
);

Idea.defaultProps = {
    compact: false
};

Idea.propTypes = {
    _id: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    votes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    account: PropTypes.object.isRequired,
    compact: PropTypes.bool,
};

export default Idea;
