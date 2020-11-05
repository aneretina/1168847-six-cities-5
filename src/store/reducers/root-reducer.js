import {combineReducers} from 'redux';
import {user} from './user-reducer';
import {loadData} from './data/data-reducer';
import {processApp} from './app-process/process';


export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.OFFER_PAGE]: processApp,
  [NameSpace.USER]: user,
});
