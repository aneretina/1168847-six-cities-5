import PropTypes from 'prop-types';


export default PropTypes.shape({
  city: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string.isRequired),
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bedroomsMax: PropTypes.number.isRequired,
  guestsMax: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  host: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }).isRequired,
}).isRequired;
