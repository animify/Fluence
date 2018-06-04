import { connect } from 'react-redux';
import IdeaView from '../components/IdeaView';

const mapStateToProps = state => ({
    idea: state.visibleIdea
});

export default connect(
    mapStateToProps,
)(IdeaView);
