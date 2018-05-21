import { connect } from 'react-redux';
import { setStatusFilter } from '../store/actions';
import FilterLinkButton from '../components/FilterLinkButton';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.statusFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setStatusFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLinkButton);
