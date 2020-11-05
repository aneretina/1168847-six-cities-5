import React from 'react';
import PropTypes from 'prop-types';
import {SortOptions} from '../../const';
import withSorting from '../../hocs/with-sorting/with-sorting';

const Sorting = (props) => {

  const {currentSort, onChangeSort, isOpened, onSortOpenClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={onSortOpenClick}>
           Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? `places__options--opened` : ``}`}>
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
};


Sorting.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onSortOpenClick: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
  onChangeSort: PropTypes.func.isRequired
};

export {Sorting};
export default withSorting(Sorting);


