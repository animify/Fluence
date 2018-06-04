import { connect } from 'react-redux';
import IdeaEdit from '../components/IdeaEdit';
import { updateIdea, StatusMap } from '../store/actions';

const mapStateToProps = (state, ownProps) => ({
    isOwner: ownProps.idea.by === state.account._id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateCategory: (category) => {
        const idea = {
            ...ownProps.idea,
            category
        };

        return dispatch(updateIdea(idea));
    },
    updateStatus: (status) => {
        const idea = {
            ...ownProps.idea,
            status: parseInt(status, 10)
        };

        return dispatch(updateIdea(idea));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IdeaEdit);
