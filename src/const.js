export const ZOOM = 12;

export const TO_PERCENT = 20;

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

export const AuthorizationStatus = {
  NOT_AUTHORIZED: `NOT_AUTHORIZED`,
  AUTHORIZED: `AUTHORIZED`,
};

export const FavoriteBtnType = {
  PROPERTY: `property`,
  CARD: `place-card`
};

export const FavoriteBtnSize = {
  [FavoriteBtnType.PROPERTY]: {width: 31, height: 33},
  [FavoriteBtnType.CARD]: {width: 18, height: 19},
};

