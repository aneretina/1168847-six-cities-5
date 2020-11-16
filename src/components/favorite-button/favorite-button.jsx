import React from 'react';
import PropTypes from 'prop-types';
import {FavoriteBtnSize, FavoriteBtnType} from '../../const';


const FavoriteButton = (props) => {
  const {type, isFavorite, onFavoriteButtonClick} = props;

  const bookmarkBtnClassname = isFavorite ? `${type}__bookmark-button ${type}__bookmark-button--active button` : `${type}__bookmark-button button`;

  const {width, height} = FavoriteBtnSize[type];

  return (
    <button className={bookmarkBtnClassname} type="button" onClick={onFavoriteButtonClick}>
      <svg className={`${type}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>

      <span className="visually-hidden">
        {isFavorite ? `In bookmarks` : `To bookmarks`}
      </span>
    </button>
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([
    FavoriteBtnType.PROPERTY,
    FavoriteBtnType.CARD
  ]).isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired
};

export default FavoriteButton;
