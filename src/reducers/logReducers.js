import { ITEM_LOG } from "../actions";
import { log } from "../utils/states";
import {LocalizeData} from '../utils/scripts';

export default (state = log, action) => {
  let newLog = { ...state };

  switch (action.type) {
    case ITEM_LOG:
      let { id, optType, date } = action.payload;
      let info = `${id} has been ${optType} at ${date}`;
      if (newLog[id] && newLog[id].length) {
        newLog[id].push(info);
      } else {
        newLog[id] = [info];
      }
      console.log(newLog);
      LocalizeData(newLog,"log");
      return newLog;
    default:
      return state;
  }
};
