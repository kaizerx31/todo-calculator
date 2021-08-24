import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Homeprops } from '../../Interface/interface';
import Buttons from './Components/Buttons';
import Header from './Components/Header';
import Result from './Components/Result';
import "./styles.css";

export const App = ({setIsLoggedIn , isLoggedIn}:Homeprops) => {


  const _handleClick = ()=> {
    setIsLoggedIn(false);
 }

  const [result, setResult] = useState("0");

  const _changeResult = (newResult : string) => {
        //console.log("newResult",newResult);
        setResult(newResult);
        //console.log(result);
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
          <button onClick= {_handleClick}>Log out</button>
          {!isLoggedIn && <Redirect to="/login"/>}
    </div>
  )
}
export default App;
