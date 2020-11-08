import {getOffersList, loadOffers, requireAuthorization, redirectToRoute} from '../store/action';
import {adaptOffer} from '../utils';
import {AuthorizationStatus} from '../const';


export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`).then(({data}) => {
    const modifiedToClientOffers = data.map((offer) => adaptOffer(offer));
    dispatch(loadOffers(modifiedToClientOffers));
    dispatch(getOffersList());
  })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTHORIZED)))
      .catch((error) => {
        throw error;
      })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
     .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTHORIZED)))
     .then(() => dispatch(redirectToRoute(`/`)))
);
