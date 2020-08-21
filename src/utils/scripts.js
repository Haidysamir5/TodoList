import { ItemTypes } from "./itemTypes";
import {itemLog} from '../actions'

//return backgorund color based on list state
export const StateColor = (state) => {
  let bgColor = "bg-info-light";
  if (state === "inprogress") bgColor = "bg-warning";
  else if (state == "done") bgColor = "bg-success-light";
  return bgColor;
};

//drop source accept type
//new=>inprogress=>done
//inprogress=>done
export const AcceptType = (itemTypes) => {
  var accept = [];
  if (itemTypes === "inprogress") accept = ItemTypes["new"];
  else if (itemTypes === "done")
    accept = ItemTypes["inprogress"];
  return accept;
};


//get current date and time 
export const GetCurrDate=()=>{

var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
return datetime;
}

//save data to local storage by a given name
export const LocalizeData= (data,dataName) => {
  localStorage[dataName]=JSON.stringify(data);
  // localStorage.todos = JSON.stringify(todos);
};

//save log array to store 
export const SaveLog=(dispatch,id,opt)=>{

  dispatch(itemLog(id,opt,GetCurrDate()));
}



