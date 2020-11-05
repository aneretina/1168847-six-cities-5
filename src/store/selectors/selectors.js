import {createSelector} from 'reselect';
import {NameSpace} from '../reducers/root-reducer';


export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getCurrentSort = (state) => state[NameSpace.PROCESS].currentSort;
export const getCurrentCity = (state) => state[NameSpace.PROCESS].city;
export const getCitiesList = (state) => state[NameSpace.PROCESS].cities;
export const getActiveOfferId = (state) => state[NameSpace.PROCESS].activeOfferId;


export const getCurrentCityOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);


