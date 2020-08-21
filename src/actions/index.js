export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const MOVE_ITEM = "MOVE_ITEM";
export const ITEM_LOG = "ITEM_LOG";
 
export const addItem = (item,itemSatet) => {
  return {
    type: ADD_ITEM,
    payload: {
        todo: item,
        todoState: itemSatet,
      },
  };
};

export const deleteItem = (itemId, itemSatet) => {
  return {
    type: DELETE_ITEM,
    payload: {
      id: itemId,
      todoState: itemSatet,
    },
  };
};

export const editItem = (itemSatet, item) => {
  return {
    type: EDIT_ITEM,
    payload: {
        todoState: itemSatet,
      item: item,
    },
  };
};

export const moveItem = (movingItem, dragState,dropState) => {
  return {
    type: MOVE_ITEM,
    payload: {
      movingItem: movingItem,
      dragState: dragState,
      dropState:dropState
    },
  };
};

export const itemLog=(id,optType,date)=>{

  return {
    type: ITEM_LOG,
    payload: {
      id: id,
      optType: optType,
      date:date
    },
  };
}