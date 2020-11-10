import {getOffersList, loadOffers, requireAuthorization, redirectToRoute, setLoggedUser} from '../store/action';
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
  .then((response) => {
    dispatch(requireAuthorization(AuthorizationStatus.AUTHORIZED));
    dispatch(setLoggedUser(response.data.email));
  })
      .catch((error) => {
        throw error;
      })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
     .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTHORIZED)))
     .then(() => dispatch(setLoggedUser(email)))
     .then(() => dispatch(redirectToRoute(`/`)))
);
