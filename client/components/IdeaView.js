import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StatusMap, StatusText } from '../store/actions';
import IdeaAdmin from '../containers/IdeaAdmin';

const IdeaView = ({ idea }) => (
    <Fragment>
        {idea != null &&
            <Fragment>
                <h4><span className="smoke@text">{idea.category} :: </span> {idea.summary}</h4>
                <div className="status" type={StatusMap[idea.status]}>
                    <small>{StatusText[StatusMap[idea.status]]}</small>
                </div>
                <div className="category">
                    <small>{idea.category}</small>
                </div>
                <div className="admin">
                    <IdeaAdmin idea={idea} />
                </div>
                <p>{idea.details}</p>
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
        upvotes: PropTypes.number.isRequired,
        comments: PropTypes.array.isRequired,
        details: PropTypes.string.isRequired
    }),
};

export default IdeaView;
