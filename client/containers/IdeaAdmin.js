import { connect } from 'react-redux';
import IdeaEdit from '../components/IdeaEdit';

const mapStateToProps = (state, ownProps) => ({
    isOwner: ownProps.idea.by === state.account._id
});

export default connect(
    mapStateToProps
)(IdeaEdit);
