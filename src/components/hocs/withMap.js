import { connect } from 'react-redux';

const mapStateToProps = ({ map }) => ({ map });

export default connect(mapStateToProps);
