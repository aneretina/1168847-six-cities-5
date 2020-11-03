import React, {PureComponent} from "react";

const withNewCommentForm = (Component) => {
  class WithNewCommentForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: ``,
        review: ``,
      };

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFormSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {option, value} = evt.target;
      this.setState({[option]: value});
    }

    render() {
      return <Component
        {...this.props}
        rating={this.state.rating}
        review={this.state.review}
        onSubmit={this.handleFormSubmit}
        onChange={this.handleFieldChange}
      />;
    }
  }

  return WithNewCommentForm;
};

export default withNewCommentForm;
