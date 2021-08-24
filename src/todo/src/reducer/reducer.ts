import { combineReducers } from "redux";
import _filter from "./filter";
import _todo from "./todo";

const _rootReducer = combineReducers({
    todo   : _todo ,
    filter : _filter
 });

export default _rootReducer ;
