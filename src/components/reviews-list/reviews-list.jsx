import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import Review from '../review/review';
import {REVIEWS_COUNT} from '../../const';

const ReviewsList = (props) => {
  const {reviews} = props;

  const sortedReviews = reviews.slice().sort((first, second) => first.date > second.date ? -1 : 1).slice(0, REVIEWS_COUNT);

  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <Review
            key={review.id}
            review={review}
          />))}
      </ul>
    </Fragment>
  );
};


ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
