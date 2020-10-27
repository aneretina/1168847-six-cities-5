import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SortOptions} from '../../const';

class Sorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedSort: false
    };

    this._onSortOpenClick = this._onSortOpenClick.bind(this);
  }

  _onSortOpenClick() {
    this.setState({
      openedSort: !this.state.openedSort,
    });
  }


  render() {
    const {currentSort, onChangeSort} = this.props;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={() => {
            this._onSortOpenClick();
          }}>
           Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.openedSort ? `places__options--opened` : ``}`}>
          {
            Object.values(SortOptions).map((item) => (
              <li key={item}
                className={`places__option ${currentSort === item ? `places__option--active` : ``}`}
                onClick={() => {
                  onChangeSort(item);
                }}
                tabIndex="0">
                {item}
              </li>))
          }
        </ul>
        <select className="places__sorting-type visually-hidden" id="places-sorting" defaultValue={currentSort}>
          {Object.values(SortOptions).map((item) => (
            <option
              key={item}
              className="places__option"
              value={item}>
              {item}
            </option>
          ))}
        </select>
      </form>
    );
  }
}

Sorting.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChangeSort: PropTypes.func.isRequired
};


export default Sorting;


