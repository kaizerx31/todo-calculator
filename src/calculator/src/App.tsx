import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Homeprops } from '../../Interface/interface';
import Buttons from './Components/Buttons';
import Header from './Components/Header';
import Result from './Components/Result';
import "./styles.css";

export const App = ({setIsLoggedIn , isLoggedIn}:Homeprops) => {

  const [result, setResult] = useState("0");

  const _changeResult = (newResult : string) => {
        setResult(newResult);
  }

  return (
    <div className="App">
          <div className = "container">
              <Header />
          </div> 

          <div className = "Calculator-app">
            <Result result={result}/>
            <Buttons _changeResult={_changeResult} 
                     result={result}
            />
          </div>
          {!isLoggedIn && <Redirect to="/login"/>}
    </div>
  )
}
export default App;
