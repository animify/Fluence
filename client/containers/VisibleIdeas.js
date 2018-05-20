import { connect } from 'react-redux';
import { toggleIdea, VisibilityFilters } from '../store/actions';
import Ideas from '../components/Ideas';

const getVisibleIdeas = (ideas, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return ideas;
        case VisibilityFilters.SHOW_COMPLETED:
            return ideas.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return ideas.filter(t => !t.completed);
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
};

const mapStateToProps = state => ({
    ideas: getVisibleIdeas(state.ideas, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleIdea: id => dispatch(toggleIdea(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ideas);
