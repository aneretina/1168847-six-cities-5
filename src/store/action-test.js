
import {ActionType, changeCity, getOffersList, setActiveOfferId, resetActiveOfferId, changeSortOptions, loadOffers, requireAuthorization, redirectToRoute, setLoggedUser, loadFavoriteOffers, loadNearOffers, loadReviews, sendReview, changeFavoriteStatus} from './action';
import {SortOptions} from '../const';

const review = {
  "comment": `I stayed here for one night and it was an unpleasant experience.`,
  "rating": 1
};

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator for change city works correctly`, () => {
    expect(changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    });
  });

  it(`ActionCreator get offers list works correctly`, () => {
    expect(getOffersList()).toEqual({
      type: ActionType.GET_OFFERS_LIST,
    });
  });

  it(`ActionCreator set active offer id works correctly`, () => {
    expect(setActiveOfferId(12)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER_ID,
      payload: 12
    });
  });

  it(`ActionCreator reset active offer if works correct`, () => {
    expect(resetActiveOfferId(12)).toEqual({
      type: ActionType.RESET_ACTIVE_OFFER_ID,
      payload: -1
    });
  });

  it(`ActionCreator for change sort options works correct`, () => {
    expect(changeSortOptions(SortOptions)).toEqual({
      type: ActionType.CHANGE_SORT_OPTIONS,
      payload: SortOptions
    });
  });

  it(`ActionCreator for load offers works correct`, () => {
    expect(loadOffers()).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: []
    });
  });

  it(`ActionCreator for require authorization works correct`, () => {
    expect(requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    });
  });

  it(`ActionCreator for redirect to route works correct`, () => {
    expect(redirectToRoute([`/`])).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`
    });
  });

  it(`ActionCreator for set logged user for active offer works correct`, () => {
    expect(setLoggedUser(`muster.mustermann@gmail.com`)).toEqual({
      type: ActionType.LOAD_LOGGED_INFO,
      payload: `muster.mustermann@gmail.com`
    });
  });

  it(`ActionCreator for load favorite offers works correct`, () => {
    expect(loadFavoriteOffers()).toEqual({
      type: ActionType.loadFavoriteOffers,
      payload: []
    });
  });

  it(`ActionCreator for change favorite status works correct`, () => {
    expect(changeFavoriteStatus(1)).toEqual({
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: 1
    });
  });

  it(`ActionCreator for load near offers work correct`, () => {
    expect(loadNearOffers()).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: []
    });
  });

  it(`ActionCreator for load reviews work correct`, () => {
    expect(loadReviews()).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: []
    });
  });

  it(`ActionCreator for load reviews work correct`, () => {
    expect(sendReview(review, `1`)).toEqual({
      type: ActionType.SEND_REVIEW,
      payload: review,
      id: `1`,
    });
  });

});
