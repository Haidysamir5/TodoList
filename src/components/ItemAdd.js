import React , {useState}from "react";
import {useSelector , useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {addItem,itemLog} from '../actions';
import {SaveLog} from '../utils/scripts'

const AddCallback=(dispatch ,text)=>{
  let optType="added";
  let item={
    "text":text,
    "id":uuidv4(), //form a unique id by using uuid
  };

  dispatch(addItem(item,"new"));

  SaveLog(dispatch,item.id,"added");
}

const ItemAdd = () => {
  let dispatch=useDispatch();

  let [text,setText]=useState('');
  let todoCount=useSelector(state=>state.todos.todoCount);
  // const dispatch =useDispatch();
  return (
    <div className="row mt-2">
      <div className="col-md-6">
        <input className="form-control " placeholder="What are the plans in your mind?"
        value={text} onChange={(e)=>{setText(e.target.value)}}/>
      </div>
      <div className="col-md-2">
          <button className="btn btn-info" onClick={()=>{AddCallback(dispatch,text)
          }} >add</button>
      </div>

    </div>
  );
};


export default ItemAdd;
