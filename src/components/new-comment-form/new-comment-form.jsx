import React, {PureComponent, createRef} from "react";
import PropTypes from 'prop-types';
import withNewCommentForm from "../../hocs/with-new-comment-form/with-new-comment-form";
import {connect} from 'react-redux';
import {sendReview} from "../../store/api-actions";
import {getError} from "../../store/selectors/selectors";
import {updateErrorStatus} from "../../store/action";

class NewCommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.formRef = createRef();
    this.reviewInputRef = createRef();
    this.ratingRef = createRef();
  }

  onFormSubmit(evt) {
    const {onReviewSubmit, rating, review, id, resetState} = this.props;
    evt.preventDefault();

    onReviewSubmit({
      review,
      rating
    }, id);

    resetState();
  }

  render() {
    const {rating, review, onRatingChange, onTextFieldChange} = this.props;

    return (
      <form className="reviews__form form"
        ref={this.formRef}
        action="#"
        method="post"
        onSubmit={this.onFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden"
            ref={this.ratingRef}
            name="rating"
            value="5"
            id="5-stars"
            type="radio"
            onChange={onRatingChange}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden"
            ref={this.ratingRef}
            name="rating"
            value="4"
            id="4-stars"
            type="radio"
            onChange={onRatingChange}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden"
            ref={this.ratingRef}
            name="rating"
            value="3"
            id="3-stars"
            type="radio"
            onChange={onRatingChange}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden"
            ref={this.ratingRef}
            name="rating"
            value="2"
            id="2-stars"
            type="radio"
            onChange={onRatingChange}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden"
            ref={this.ratingRef}
            name="rating"
            value="1"
            id="1-star"
            type="radio"
            onChange={onRatingChange}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea"
          ref={this.reviewInputRef}
          value={review}
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={onTextFieldChange}>
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            // disabled={review.length < LimitLetter.MIN || review.length >= LimitLetter.MAX || !rating || !review ? true : false}
            type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

NewCommentForm.propTypes = {
  onReviewSubmit: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onTextFieldChange: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
};


const mapDispatchToProps = ((dispatch) => ({
  onReviewSubmit(reviewData, id) {
    dispatch(sendReview(reviewData, id));
  },
}));

export {NewCommentForm};
export default connect(null, mapDispatchToProps)(withNewCommentForm(NewCommentForm));
