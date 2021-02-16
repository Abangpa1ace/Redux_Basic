import { connect } from 'react-redux';
import ShowNumber from '../components/ShowNumber';

const mapStateToProps = (state) => {
  return {
    number: state.number,
  }
}

export default connect(mapStateToProps)(ShowNumber);
