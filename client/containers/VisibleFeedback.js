import { connect } from 'react-redux';
import { toggleFeedback, VisibilityFilters } from '../store/actions';
import FeedbackList from '../components/FeedbackList';

const getVisibleFeedback = (feedbackList, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return feedbackList;
        case VisibilityFilters.SHOW_COMPLETED:
            return feedbackList.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return feedbackList.filter(t => !t.completed);
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
};

const mapStateToProps = state => ({
    feedbackList: getVisibleFeedback(state.feedbackList, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleFeedback: id => dispatch(toggleFeedback(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedbackList);
