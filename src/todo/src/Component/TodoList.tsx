import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EFilterTypes, _toggleTodo } from '../actions';
import { IToDo } from '../Interface/interface';
import _  from 'lodash';

const TodoList = () => {
  const tasks  = useSelector((state) =>  _.get(state,"todo",[]));
  const filter = useSelector((state ) => _.get(state,"filter"));
  const dispatch = useDispatch();
    return (
        <ul className="Todo-List">
          {
              tasks.map((task : IToDo,index=0) =>  {
                   if(filter === EFilterTypes.SHOW_ALL ||
                     (filter === EFilterTypes.SHOW_COMPLETED && task.isCompleted === true) ||
                      (filter === EFilterTypes.SHOW_INCOMPLETE && task.isCompleted === false))
                      return (
                          
                        <li key = {`${task.id}-${index}-renderTasks`}
                          className = {task.isCompleted? "completed" : "" }
                          onClick ={() => {
                          dispatch(_toggleTodo(task.id));
                        }}> 
                        
                              <input type = "checkbox" 
                                  key = {`${task.id}-${index}-renderTasks`}
                                  checked = {task.isCompleted}
                                  className="todo-checkbox"
                              />
                            {task.title} 
                        </li>
                      
                      )
                  else 
                   return null;
                }
             )
           }
        </ul>
     )
 }

export default TodoList;
