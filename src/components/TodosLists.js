import React from "react";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { moveItem } from "../actions";
import { AcceptType,SaveLog } from "../utils/scripts";


const TodosLists = ({ todoState }) => {
  const dispatch = useDispatch();

  var accept = AcceptType(todoState); //get accepted type based on the drop list type 

  const todos = useSelector((state) => state.todos[todoState]); //retrive toos 
  //init drop event
  const [{ isOver }, drop] = useDrop({
    accept: accept,
    drop: (props) => {
      dispatch( moveItem(props.todo,props.dragstate,todoState)) //dispatch moveitem function
      //savelog(dispatch,id,logtext);
      SaveLog(dispatch,props.todo.id,`dragged from the ${props.dragstate} list and droppod on the ${todoState} list`) 
    },
    collect: (monitors) => ({
      isOver: monitors.isOver(),
    }),
  });

  return (
    <div >
        <h3>{todoState}</h3>
        <ul ref={drop}
          className="list-group new-items"
        >
          {todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} todoState={todoState} />;
          })}
        </ul>
    </div>
  );
};

export default TodosLists;
