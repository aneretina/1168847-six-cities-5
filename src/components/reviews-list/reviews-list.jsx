import React, {PureComponent, Fragment} from 'react';
import PropTypes from "prop-types";
import Review from '../review/review';

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {reviews} = this.props;

    return (
      <Fragment>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
          {reviews.map((review) => (
            <Review
              key={review.id}
              review={review}
            />))}
        </ul>
      </Fragment>
    );
  }
}


ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
