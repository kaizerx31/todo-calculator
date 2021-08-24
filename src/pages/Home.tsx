import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Homeprops } from '../Interface/interface'

const Home = ({setIsLoggedIn , isLoggedIn}:Homeprops) => {

    const _handleClick = ()=> {
       setIsLoggedIn(false);
    }

    return (
        <div className="Header">
            <h1>Home</h1>
            <ul className="navigationBar">
                <li> 
                    <Link to="/about">About</Link>  
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

        </div>
    )
}

export default Home
