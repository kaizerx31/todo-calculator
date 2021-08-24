import React from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { Homeprops } from '../Interface/interface'

const Home = ({setIsLoggedIn , isLoggedIn}:Homeprops) => {

    const _handleClick = ()=> {
       setIsLoggedIn(false);
    }
    const pathname= useLocation().pathname;
    return (
        <div className="Header">
            <ul className="navigationBar">
                <li> 
                    <Link to="/">Home</Link>  
                </li> 
                <li> 
                    <Link to="/calculator">Calculator</Link>  
                </li> 
                <li> 
                    <Link to="/todo">To-Do</Link>  
                </li> 
    
            </ul>
            <div className="logout-button">
                <button onClick= {_handleClick}>Log out</button>
                {!isLoggedIn && <Redirect to="/login"/>}   
            </div>
              { pathname ==="/" && <h1>Home</h1>}
        </div>
    )
}

export default Home
