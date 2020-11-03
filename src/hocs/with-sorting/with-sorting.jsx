import React, {PureComponent} from "react";

const withSorting = (Component) => {
  class WithSorting extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpened: false
      };
      this._onSortOpenClick = this._onSortOpenClick.bind(this);
    }

    _onSortOpenClick() {
      this.setState({
        isOpened: !this.state.isOpened,
      });
    }

    render() {
      return <Component
        {...this.props}
        isOpened={this.state.isOpened}
        onSortOpenClick={this._onSortOpenClick}
      />;
    }
  }
  return WithSorting;
};


export default withSorting;
