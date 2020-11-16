import PropTypes from 'prop-types';


export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date),
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  userIsPro: PropTypes.bool.isRequired,
}).isRequired;
