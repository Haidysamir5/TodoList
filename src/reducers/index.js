import { combineReducers } from "redux";
import itemsReducers from './itemsReducers';
import logReducers from './logReducers';
export default combineReducers({
  log:logReducers,
  todos:itemsReducers,
});
