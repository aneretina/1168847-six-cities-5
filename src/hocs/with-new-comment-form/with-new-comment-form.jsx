import React, {PureComponent} from "react";

const withNewCommentForm = (Component) => {
  class WithNewCommentForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
      this.resetState = this.resetState.bind(this);
    }

    onFormSubmit(evt) {
      evt.preventDefault();
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _handleTextFieldChange(evt) {
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
        onRatingChange={this._handleRatingChange}
        onTextFieldChange={this._handleTextFieldChange}
        resetState={this.resetState}
      />;
    }
  }

  return WithNewCommentForm;
};

export default withNewCommentForm;
