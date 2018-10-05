import { connect } from 'react-redux';
import { receiveCars } from '../../actions/cars_actions';
import ListingsPage from './listings_page';

const mapStateToProps = (state = {}) => ({
  cars: state.entities.cars
});

const mapDispatchToProps = (dispatch) => ({
  receiveCars: (page, min, max) => dispatch(receiveCars(page, min, max)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsPage);