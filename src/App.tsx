import React from 'react';
import Home from './pages/Home';
import Calculator  from "./calculator/src/App"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import { useState } from 'react';
import Login from './pages/Login';
import "./styles.css";
import NotFound from './pages/NotFound';
import ToDo from './todo/src/index';

interface IRouteDetails {
  path :string;
  component: JSX.Element;
  isPrivate:boolean;
}

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const routes: IRouteDetails[]= [
    {
      path : "/",
      component : <Home setIsLoggedIn={setIsLoggedIn}
                        isLoggedIn={isLoggedIn}
                  />,
      isPrivate: true
    },
    {
      path : "/login",
      component :  <Login setIsLoggedIn={setIsLoggedIn}
                          isLoggedIn={isLoggedIn}
                   />,
      isPrivate: false
    },
    {
      path : "/calculator",
      component : <Calculator setIsLoggedIn={setIsLoggedIn}
                              isLoggedIn={isLoggedIn}
                  />,
      isPrivate: true
    },
    {
      path : "/todo",
      component : <ToDo setIsLoggedIn={setIsLoggedIn}
                        isLoggedIn={isLoggedIn}
                  />,
      isPrivate: true
    }
  ];
  return (
    <BrowserRouter>
         <Switch>
              <>
                {
                  routes.map((route,index)=> 
                    <Route path = {route.path} key = {`${route}-${index}`}>
                       {
                            route.isPrivate?
                             (isLoggedIn? route.component:<Redirect to="/login"/>)
                              :route.component
                           }
                     </Route>
                  )
                }
              </>
              <Route component ={NotFound}/>  
         </Switch>
     </BrowserRouter>
    
  );
}

export default App;
