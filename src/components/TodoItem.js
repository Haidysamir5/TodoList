import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useDrag } from "react-dnd";
import { deleteItem, editItem,itemLog } from "../actions";
import { ItemTypes } from "../utils/itemTypes";
import { StateColor ,SaveLog } from "../utils/scripts";
import {logModal} from '../utils/logModal';
const TodoItem = ({ todo, todoState }) => {
  const dispatch = useDispatch(); //hook dispatch 

  let [editable, setEdit] = useState(false); //hook edit item
  let [text, setText] = useState(); //hook set text
  let bgColor = StateColor(todoState); //get bg color on the state
  let { id } = todo; //todo.id
  const logs = useSelector((state) => state.log); //state logs 
  //init drag event
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes[todoState], //required for dnd item 
      todo: todo,
      dragstate: todoState,
    },
    collect: (monitors) => ({
      isDragging: monitors.isDragging(), //flag drag item 
    }),
  });

  
  return (
    <li
      className={`list-group-item ${bgColor}`}
      key={id}
      ref={drag}
      style={{ opacity: isDragging ? "0.5" : "1" }}
    >
      <div className="row">
        <div className="col-8">
          {/* edit state? render input with the text as default value : render the text  */}
          {editable ? (
            <input
              className="form-control"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          ) : (
            todo.text
          )}
        </div>
        
        <div className="col-1">
          {editable ? (
            <i
              className="icon fa fa-save text-gray"
              onClick={() => {
                dispatch(
                  editItem(todoState, {
                    id: id,
                    text: text,
                  })
                );
                setEdit(false); //set edit  after close the edit mood
                SaveLog(dispatch,id, "edited"); //save edit as log
              }}
            ></i>
          ) : (
            <i
              className="icon fa fa-edit text-gray"
              onClick={() => {
                setEdit(true);//set edit  after open the edit mood
                setText(todo.text);
              }}
            ></i>
          )}
        </div>
        <div className="col-1">
          <i
            className="icon fas fa-history text-blue "
            onClick={() => {
              logModal(logs[id]); //open log modal
              
            }}
          ></i>{" "}
        </div>
        <div className="col-1">
          <i
            className="icon fa fa-trash text-red"
            onClick={() => {
              SaveLog(dispatch,id, "deleting"); //save deleting as log 
              dispatch(deleteItem(id, todoState)); //delte the item
            }}
          ></i>{" "}
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
