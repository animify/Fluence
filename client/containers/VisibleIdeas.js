import { connect } from 'react-redux';
import { toggleIdea, StatusFilters } from '../store/actions';
import Ideas from '../components/Ideas';

const getVisibleIdeas = (ideas, filter) => {
    switch (filter) {
        case StatusFilters.SHOW_ALL:
            return ideas;
        case StatusFilters.SHOW_PENDING_REVIEW:
            return ideas.filter(t => t.status === 0);
        case StatusFilters.SHOW_PLANNED:
            return ideas.filter(t => t.status === 1);
        case StatusFilters.SHOW_IN_PROGRESS:
            return ideas.filter(t => t.status === 2);
        case StatusFilters.SHOW_COMPLETED:
            return ideas.filter(t => t.status === 3);
        case StatusFilters.SHOW_ACTIVE:
            return ideas.filter(t => t.status !== 3);
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
};

const mapStateToProps = state => ({
    ideas: getVisibleIdeas(state.ideas, state.statusFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleIdea: id => dispatch(toggleIdea(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ideas);
