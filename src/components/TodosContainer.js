import React from "react";
import TodosLists from "./TodosLists";


const TodosContainer = () => {
  return (
    <div className="row mt-3">
      <div className="col-4">
        <TodosLists todoState="new" />
      </div>
      <div className="col-4">
        <TodosLists todoState="inprogress" />
      </div>
      <div className="col-4">
        <TodosLists todoState="done" />
      </div>
    </div>
  );
};

export default TodosContainer;
