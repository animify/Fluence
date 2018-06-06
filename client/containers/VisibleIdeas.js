import { connect } from 'react-redux';
import { toggleIdea } from '../store/actions';
import Ideas from '../components/Ideas';
import getVisibleIdeas from './GetVisibleIdeas';

const mapStateToProps = state => ({
    account: state.account,
    ideas: getVisibleIdeas(state.ideas, state.statusFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleIdea: id => dispatch(toggleIdea(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ideas);
