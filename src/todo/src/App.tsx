import React from 'react';
import { Redirect } from 'react-router-dom';
import { Homeprops } from '../../Interface/interface';
import AddToDo from './Component/AddToDo';
import FilterButtons from './Component/FilterButtons';
import Header from './Component/Header';
import TodoList from './Component/TodoList';


const App = ({setIsLoggedIn,isLoggedIn}:Homeprops) => {
  
  return (
    <div className="ToDo">
         <div className="container">
            <Header />
        </div>

            <div className="todo-app">
              <AddToDo  setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
              <FilterButtons />
              <TodoList  />
           </div>
           {!isLoggedIn && <Redirect to="/login"/>}
     </div>
  );
}

export default App;
