export const ZOOM = 12;

export const CitiesCoordinates = {
  AMSTERDAM: [52.38333, 4.9],
  PARIS: [48.864716, 2.349014],
  COLOGNE: [50.935173, 6.953101],
  HAMBURG: [53.551086, 9.993682],
  DUSSELDORF: [51.233334, 6.783333],
  BRUSSELS: [50.8505, 4.3488]
};

export const CITIES = [
  `Amsterdam`,
  `Paris`,
  `Cologne`,
  `Hamburg`,
  `Dusseldorf`,
  `Brussels`
];


export const Icon = {
  URL: `/img/pin.svg`,
  ACTIVE_URL: `img/pin-active.svg`,
  SIZE: [30, 30],
};

export const ID_MAP_CONTAINER = `map`;

export const SortOptions = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const getSortedOffersByType = (offers, sortType) => {
  switch (sortType) {
    case SortOptions.POPULAR:
      return offers;
    case SortOptions.PRICE_LOW_TO_HIGH:
      return offers.sort((a, b) => a.price - b.price);
    case SortOptions.PRICE_HIGH_TO_LOW:
      return offers.sort((a, b) => b.price - a.price);
    case SortOptions.TOP_RATED_FIRST:
      return offers.sort((a, b) => b.rating - a.rating);
  }
  return offers;
};
