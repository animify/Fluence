import { connect } from 'react-redux';
import NavButton from '../components/NavButton';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.page === state.visiblePage,
    page: ownProps.page
});

export default connect(
    mapStateToProps
)(NavButton);
