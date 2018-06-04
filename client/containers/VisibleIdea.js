import { connect } from 'react-redux';
import IdeaView from '../components/IdeaView';

const mapStateToProps = state => ({
    idea: state.viewIdea
});

export default connect(
    mapStateToProps,
)(IdeaView);
