import { connect } from 'react-redux';
import FilterLinkToggle from '../components/FilterLinkToggle';
import { FilterNames } from '../store/actions';

const mapStateToProps = state => ({
    filterName: FilterNames[state.statusFilter]
});

export default connect(
    mapStateToProps
)(FilterLinkToggle);
