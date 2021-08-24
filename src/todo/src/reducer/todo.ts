import { EActionTypes } from "../actions";
import { IToDo } from "../Interface/interface";

const _todo = (state :IToDo[] = [], action : {type:EActionTypes , id:number, title : string }) => {
  
     switch (action.type) {
          case EActionTypes.ADD_TODO:
            return [
              ...state,
              {
                id: action.id,
                title: action.title || "",
                isCompleted: false
              }
            ]
          case EActionTypes.TOGGLE_TODO:
              return state.map((todo : IToDo) =>
                (todo.id === action.id)? 
                {...todo, isCompleted: !todo.isCompleted} : todo
              )
          default:
            return state
      }
  }
  
  export default _todo;
  