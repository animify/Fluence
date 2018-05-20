import React from 'react';
import PropTypes from 'prop-types';
import Feedback from './Feedback';

const FeedbackList = ({ feedbackList, toggleFeedback }) => (
    <ul className="list bulleted">
        {feedbackList.map(listing =>
            <Feedback key={listing.id} {...listing} onClick={() => toggleFeedback(listing.id)} />
        )}
    </ul>
);

FeedbackList.propTypes = {
    feedbackList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleFeedback: PropTypes.func.isRequired
};

export default FeedbackList;
