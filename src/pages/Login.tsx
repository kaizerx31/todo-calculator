import React, { FormEvent } from 'react'
import { useState } from 'react'
import { Redirect} from 'react-router-dom';
import { Loginprops } from '../Interface/interface';


const Login = ({setIsLoggedIn}:Loginprops) => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loginState,setLoginState] = useState(false);
    

    const _handleSubmit = (e :FormEvent) => {
        e.preventDefault();
        // console.log(username);
        // console.log(password);
        if(username==="ashwin" && password ==="admin") {
              setIsLoggedIn(true);
              setLoginState(true);
        } else {

          alert("invalid login credentials");
         }
    }
    return (
        <div className="loginContainer">
            <h1>Enter Login details</h1>
            <form className = "login" onSubmit = {_handleSubmit} >
                <input type ="text"  value={username} required 
                    placeholder="username"
                    onChange={(e) => {
                    setUsername(e.target.value);
                     } }  
                />
                 <input type ="password"  value={password} required 
                     placeholder="password"
                     onChange={(e) => {
                     setPassword(e.target.value);
                      } }  
                />   
                <button>Login</button>
            </form>
             {loginState && <Redirect to="/"/>}
        </div>
    )
}

export default Login
