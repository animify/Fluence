import { connect } from 'react-redux';
import { setVisiblePage } from '../store/actions';
import NavButton from '../components/NavButton';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.page === state.visiblePage
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisiblePage(ownProps.page))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavButton);
