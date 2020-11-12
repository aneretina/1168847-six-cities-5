import PropTypes from 'prop-types';


export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}).isRequired;
