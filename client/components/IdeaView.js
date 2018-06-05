import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StatusMap, StatusText } from '../store/actions';
import IdeaAdmin from '../containers/IdeaAdmin';

const IdeaView = ({ idea }) => (
    <Fragment>
        {idea != null &&
            <Fragment>
                <div className="row">
                    <div className="col-12@t col-4@m">
                        <div className="votes">
                            <h5>Voters</h5>
                            <p>People who have upvoted this idea.</p>
                            <ul className="list mt3">
                                {idea.votes.map(vote => (
                                    <li key={vote._id} className="item">
                                        <a className="link link-dark"><img src={vote.by.avatar} alt={vote.by.name} /> {vote.by.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-12@t col-8@m">
                        <div className="post">
                            <div className="title">
                                <h4><span className="smoke@text">{idea.category} :: </span> {idea.summary}</h4>
                            </div>
                            <div className="options">
                                <ul className="list compact horizontal">
                                    <li className="status" type={StatusMap[idea.status]}>
                                        <small>{StatusText[StatusMap[idea.status]]}</small>
                                    </li>
                                    <li className="item">
                                        <a>Mute</a>
                                    </li>
                                    <li className="item">
                                        <a>Edit</a>
                                    </li>
                                    <li className="item">
                                        <a>Report</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="by">
                                <div className="avatar">
                                    <img src={idea.by.avatar} alt={idea.by.name} />
                                </div>
                                <strong className="name">{idea.by.name}</strong>
                                <small className="when">{moment(idea.created).fromNow()}</small>

                            </div>
                            <div className="text">
                                <p>{idea.details}</p>
                            </div>

                            {/* <div className="status" type={StatusMap[idea.status]}>
                        <small>{StatusText[StatusMap[idea.status]]}</small>
                    </div>
                    <div className="category">
                        <small>{idea.category}</small>
                    </div>
                    <div className="admin">
                        <IdeaAdmin idea={idea} />
                    </div> */}

                        </div>
                        <div className="comments">
                            <div className="new">
                                <div className="avatar">
                                    <img src={idea.by.avatar} alt={idea.by.name} />
                                </div>

                                <div className="entry">
                                    <div className="input">
                                        <textarea placeholder={`Reply to ${idea.by.name}...`} />
                                    </div>
                                    <div className="input">
                                        <a className="button base">Post Comment</a>
                                    </div>
                                </div>
                            </div>

                            <h5>{idea.comments.length} comments</h5>
                            {idea.comments.length === 0 ?
                                <div className="nocomments">No one has left a comment on this idea yet.</div> : null}
                        </div>
                    </div>
                </div>
            </Fragment>
        }
    </Fragment>
);

IdeaView.defaultProps = {
    idea: undefined
};

IdeaView.propTypes = {
    idea: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired,
        votes: PropTypes.array.isRequired,
        comments: PropTypes.array.isRequired,
        details: PropTypes.string.isRequired
    }),
};

export default IdeaView;
