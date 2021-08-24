import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Homeprops } from '../../Interface/interface';
import App from './App';
import _rootReducer from './reducer/reducer';
import "./styles.css";

const store = createStore(_rootReducer);

const ToDo = ({setIsLoggedIn , isLoggedIn}:Homeprops) => {
  return (
    <Provider store = {store}>
    <App setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
  </Provider>
  )
}

export default ToDo
