import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, MOVE_ITEM } from "../actions";
import { todos } from "../utils/states";
import {LocalizeData} from '../utils/scripts';

export default (state = todos, action) => {
  let newTodos = { ...state };
  switch (action.type) {
    case ADD_ITEM:
      let {todo} = action.payload;
      newTodos[action.payload.todoState] = [...newTodos[action.payload.todoState], todo];
      newTodos["todoCount"] = newTodos["todoCount"] + 1;
      LocalizeData(newTodos,"todos");
      return newTodos;
    case EDIT_ITEM:
      let { item } = action.payload;
      let EditedState = action.payload.todoState;
      var index = newTodos[EditedState].findIndex(
        (todo) => todo.id === item.id
      );
      if (index != -1) newTodos[EditedState][index]["text"] = item.text;
      LocalizeData(newTodos,"todos");
      return newTodos;
    case DELETE_ITEM:
      let { id, todoState } = action.payload;
      newTodos[todoState] = newTodos[todoState].filter((todo) => todo.id != id);
      newTodos["todoCount"] = newTodos["todoCount"] - 1;
      LocalizeData(newTodos,"todos");
      return newTodos;
    case MOVE_ITEM:
      let { movingItem, dragState,dropState } = action.payload;
      newTodos[dropState] = [...newTodos[dropState], movingItem];
      newTodos[dragState] = newTodos[dragState].filter((todo) => todo.id != movingItem.id);
      LocalizeData(newTodos,"todos");
      return newTodos;
    default:
      return state;
  }
};
