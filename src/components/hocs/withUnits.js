import { connect } from 'react-redux';
import { addUnit, removeUnit } from 'store/unit/actions';

const mapStateToProps = ({ unit }) => ({ unit });
const mapDispatchToProps = { addUnit, removeUnit };

export default connect(mapStateToProps, mapDispatchToProps);
