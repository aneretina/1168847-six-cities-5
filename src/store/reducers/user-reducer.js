
import {extend} from '../../utils';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NOT_AUTHORIZED,
  userEmail: ``
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });

    case ActionType.LOAD_LOGGED_INFO:
      return extend(state, {
        userEmail: action.payload.email,
      });
  }
  return state;
};

export {user};
