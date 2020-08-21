import React from "react";
import ItemAdd from "./ItemAdd";
import TodosContainer from "./TodosContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const App = () => {
  return (
    <div className="container">
    <ItemAdd /> 
     <DndProvider backend={HTML5Backend}>
        <TodosContainer />
      </DndProvider>
    </div>
  );
};


export default App;
