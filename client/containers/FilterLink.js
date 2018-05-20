import { connect } from 'react-redux';
import { setVisibilityFilter } from '../store/actions';
import FilterLinkButton from '../components/FilterLinkButton';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLinkButton);
