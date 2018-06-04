import { connect } from 'react-redux';
import FilterLinkToggle from '../components/FilterLinkToggle';
import { StatusText } from '../store/actions';

const mapStateToProps = state => ({
    filterName: StatusText[state.statusFilter]
});

export default connect(
    mapStateToProps
)(FilterLinkToggle);
