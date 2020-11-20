import React, {PureComponent} from "react";

const withReviewForm = (Component) => {
  class WithNewCommentForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``,
        isDisabled: false,
      };

      this._onRatingChange = this._onRatingChange.bind(this);
      this._onTextChange = this._onTextChange.bind(this);
      this.resetState = this.resetState.bind(this);
      this._updateDisableFormStatus = this._updateDisableFormStatus.bind(this);
    }

    onFormSubmit(evt) {
      evt.preventDefault();
    }

    _onRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _updateDisableFormStatus(status) {
      this.setState({isDisabled: status});
    }

    _onTextChange(evt) {
      this.setState({
        review: evt.target.value,
      });
    }

    resetState() {
      this.setState({
        rating: ``,
        review: ``
      });

    }

    render() {
      return <Component
        {...this.props}
        rating={this.state.rating}
        review={this.state.review}
        onRatingChange={this._onRatingChange}
        onTextChange={this._onTextChange}
        resetState={this.resetState}
        isDisabled={this.state.isDisabled}
        updateDisableFormStatus={this._updateDisableFormStatus}
      />;
    }
  }

  return WithNewCommentForm;
};

export default withReviewForm;
