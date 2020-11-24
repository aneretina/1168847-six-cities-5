import {user} from "./user-reducer";
import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NOT_AUTHORIZED,
    email: ``,
  });
});

it(`Reducer should update logged Info`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NOT_AUTHORIZED,
    email: ``,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTHORIZED,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    email: ``,
  });
});

it(`Reducer should update user`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    email: {},
  }, {
    type: ActionType.LOAD_LOGGED_INFO,
    payload: `muster.mustermann@gmail.com`,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    email: `muster.mustermann@gmail.com`,
  });
});

