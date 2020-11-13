import {getOffersList, loadOffers, requireAuthorization, redirectToRoute, setLoggedUser, loadFavoriteOffers, loadNearOffers, loadReviews} from '../store/action';
import {adaptOffer, adaptReview} from '../utils';
import {AuthorizationStatus} from '../const';


export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`).then(({data}) => {
    const modifiedToClientOffers = data.map((offer) => adaptOffer(offer));
    dispatch(loadOffers(modifiedToClientOffers));
    dispatch(getOffersList());
  })
);

export const fetchNearOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`).then(({data}) => {
    const modifiedToClientNearOffers = data.map((nearOffer) => adaptOffer(nearOffer));
    dispatch(loadNearOffers(modifiedToClientNearOffers));
  })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then((response) => {
    dispatch(requireAuthorization(AuthorizationStatus.AUTHORIZED));
    dispatch(setLoggedUser(response.data.email));
  })
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
     .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTHORIZED)))
     .then(() => dispatch(setLoggedUser(email)))
     .then(() => dispatch(redirectToRoute(`/`)))
);

export const getFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      const modifiedFavoriteOffers = data.map((favoriteOffer) => adaptOffer(favoriteOffer));
      dispatch(loadFavoriteOffers(modifiedFavoriteOffers));
    }).catch(() => {})
);

export const changeFavoriteStatus = (id, status) => (dispatch, _getState, api) => {
  api.post(`/favorite/${id}/${status}`)
  .then(api.get(`/hotels`)
  .then(({data}) => {
    const modifiedToClientOffers = data.map((offer) => adaptOffer(offer));
    dispatch(loadOffers(modifiedToClientOffers));
  }))
    .then(api.get(`/favorite`)
    .then(({data}) => {
      const modifiedFavoriteOffers = data.map((favoriteOffer) => adaptOffer(favoriteOffer));
      dispatch(loadFavoriteOffers(modifiedFavoriteOffers));
    }));
};

export const fetchReviewsList = (offerId) => (dispatch, _getState, api) => (
  api.get(`/comments/${offerId}`)
  .then(({data}) => {
    const modifiedReviews = data.map((review) => adaptReview(review));
    dispatch(loadReviews(modifiedReviews));
  })
);

