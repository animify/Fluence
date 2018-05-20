import React from 'react';
import PropTypes from 'prop-types';
import Feedback from './Feedback';

const FeedbackList = ({ feedbackList, toggleFeedback }) => (
    <ul className="list styled">
        {feedbackList.map(feedback =>
            <Feedback key={feedback.id} {...feedback} onClick={() => toggleFeedback(feedback.id)} />
        )}
    </ul>
);

FeedbackList.propTypes = {
    feedbackList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleFeedback: PropTypes.func.isRequired
};

export default FeedbackList;
