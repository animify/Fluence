import { connect } from 'react-redux';
import RoadmapColumn from '../components/RoadmapColumn';
import getVisibleIdeas from './GetVisibleIdeas';

const mapStateToProps = (state, ownProps) => ({
    account: state.account,
    ideas: getVisibleIdeas(state.ideas, ownProps.filter)
});

export default connect(
    mapStateToProps,
)(RoadmapColumn);
