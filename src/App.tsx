import React from 'react';
import Home from './pages/Home';
import Calculator  from "./calculator/src/App"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import About from './pages/About';
import { useState } from 'react';
import Login from './pages/Login';
import "./styles.css";
import NotFound from './pages/NotFound';
import ToDo from './todo/src/index';


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
         <Switch>
              <Route path ="/login" >
                  <Login setIsLoggedIn={setIsLoggedIn}
                        isLoggedIn={isLoggedIn}
                  />
              </Route>

              <Route path ="/"  exact>
                {isLoggedIn?<Home setIsLoggedIn={setIsLoggedIn}
                                  isLoggedIn={isLoggedIn}
                            /> : <Redirect to="/login"/>}
              </Route>

              <Route path ="/about" >
                {isLoggedIn?<About/> : <Redirect to="/login"/>}
              </Route>

              <Route path = "/calculator">
                {isLoggedIn?<Calculator setIsLoggedIn={setIsLoggedIn}
                                  isLoggedIn={isLoggedIn}
                            /> : <Redirect to="/login"/>}
              </Route>

              <Route path = "/todo">
                {isLoggedIn?<ToDo setIsLoggedIn={setIsLoggedIn}
                                  isLoggedIn={isLoggedIn}
                            /> : <Redirect to="/login"/>}
              </Route>

              <Route component ={NotFound}/>  
         </Switch>
     </BrowserRouter>

  );
}

export default App;
