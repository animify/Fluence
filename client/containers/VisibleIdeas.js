import { connect } from 'react-redux';
import { toggleIdea, VisibilityFilters, IdeaStatus } from '../store/actions';
import Ideas from '../components/Ideas';

const getVisibleIdeas = (ideas, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return ideas;
        case VisibilityFilters.SHOW_PENDING_REVIEW:
            return ideas.filter(t => t.status === IdeaStatus.PENDING_REVIEW);
        case VisibilityFilters.SHOW_PLANNED:
            return ideas.filter(t => t.status === IdeaStatus.PLANNED);
        case VisibilityFilters.SHOW_IN_PROGRESS:
            return ideas.filter(t => t.status === IdeaStatus.IN_PROGRESS);
        case VisibilityFilters.SHOW_COMPLETED:
            return ideas.filter(t => t.status === IdeaStatus.COMPLETED);
        case VisibilityFilters.SHOW_ACTIVE:
            return ideas.filter(t => t.status !== IdeaStatus.COMPLETED);
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
