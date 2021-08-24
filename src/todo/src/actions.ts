
export enum EActionTypes  {
  ADD_TODO = "ADD_TODO" ,
  TOGGLE_TODO = "TOGGLE_TODO" ,
  SET_FILTER  = "SET_FILTER"
}

let counter =1;

export const _addTodo = (title :string)  =>  ({
  type: EActionTypes.ADD_TODO,
  id: counter++,
  title :title
})

export const _toggleTodo = (id : number)  => ({
    type: EActionTypes.TOGGLE_TODO,
    id:id
  })

export const _setFilter = (filter :string)  => ({
  type: EActionTypes.SET_FILTER,
  filter:filter
})



export enum EFilterTypes  {
  SHOW_ALL        = "SHOW_ALL",
  SHOW_COMPLETED  = "SHOW_COMPLETED",
  SHOW_INCOMPLETE = "SHOW_INCOMPLETE"
}



export interface IActionObject {
    type   :string;
    id?    : number;
    title? : string;
    filter?: string;

}


