import { connect } from 'react-redux';
import NavButton from '../components/NavButton';

const mapStateToProps = (state, ownProps) => ({
    account: state.account,
    active: ownProps.page === state.visiblePage,
    page: ownProps.page
});

export default connect(
    mapStateToProps
)(NavButton);
