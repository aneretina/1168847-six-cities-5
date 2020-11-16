import React, {PureComponent, createRef} from "react";
import PropTypes from 'prop-types';
import withReviewForm from "../../hocs/with-review-form/with-review-form";
import {connect} from 'react-redux';
import {sendReview} from "../../store/api-actions";
import {ratings, ratingTitle, DisableStatus, TextLimits, ERROR_TEXT} from "../../const";

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.formRef = createRef();
    this.reviewInputRef = createRef();
    this.ratingRef = createRef();
    this.errorRef = React.createRef();
  }

  onFormSubmit(evt) {
    const {onReviewSubmit, rating, review, id, resetState, updateDisableFormStatus} = this.props;
    evt.preventDefault();
    updateDisableFormStatus(DisableStatus.DISABLED);
    onReviewSubmit({review, rating}, id)
    .then(() => {
      updateDisableFormStatus(DisableStatus.NOT_DISABLED);
      resetState();
    }).catch(() => {
      updateDisableFormStatus(DisableStatus.NOT_DISABLED);
      this.errorRef.current.textContent = ERROR_TEXT;
    });
  }


  render() {
    const {rating, review, onRatingChange, onTextChange, isDisabled} = this.props;

    return (
      <form className="reviews__form form"
        ref={this.formRef}
        action="#"
        method="post"
        onSubmit={this.onFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratings.map((star, index) => {
            return (
              <React.Fragment key={`${index}`} >
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={star}
                  id={`${star}-stars`}
                  type="radio"
                  onChange={onRatingChange}
                  checked={rating === star}
                  disabled={isDisabled}
                />
                <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title={ratingTitle[-rating + 5]}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })}
        </div>
        <textarea className="reviews__textarea form__textarea"
          ref={this.reviewInputRef}
          value={review}
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={onTextChange}
          disabled={isDisabled}>
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            disabled={review.length < TextLimits.MIN || review.length >= TextLimits.MAX || !rating || !review ? true : false}
            type="submit">Submit</button>
        </div>
        <p className="error" style={{color: `red`}}
          ref={this.errorRef}></p>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  onReviewSubmit: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  updateDisableFormStatus: PropTypes.func.isRequired
};

const mapDispatchToProps = ((dispatch) => ({
  onReviewSubmit(reviewData, id) {
    return dispatch(sendReview(reviewData, id));
  },
}));

export {ReviewForm};
export default connect(null, mapDispatchToProps)(withReviewForm(ReviewForm));
