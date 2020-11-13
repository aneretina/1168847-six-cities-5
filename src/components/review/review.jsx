import React from 'react';
import moment from 'moment';
import {TO_PERCENT} from '../../const';
import reviewProp from './review.prop';


const Review = (props) => {
  const {review} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: review.rating * TO_PERCENT + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.date}>{moment(review.date).format(`MMMM DD`)}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: reviewProp,
};

export default Review;
