import React, {FormEvent, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Homeprops } from '../../../Interface/interface';
import { _addTodo } from '../actions';

const AddTodo = ({setIsLoggedIn ,isLoggedIn}:Homeprops) => {
   const [title, setTitle] = useState('');

   const dispatch = useDispatch();

   const _handleSubmit = (e : FormEvent)=> {
        e.preventDefault();
        const error="you entered an empty task";
        title.trim() ? dispatch(_addTodo(title)):alert(error);
        setTitle('');
    }
    const _handlelogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div className="add-todo">
            <form className="add-div" onSubmit= {_handleSubmit}>
                <input type="text" value={title} required 
                    onChange={(e) => {
                    setTitle(e.target.value);
                } }   
                /> 
                <button>Add Task</button>
            </form>
            <button onClick={_handlelogout}>Logout</button>
        </div>
    )
}

export default AddTodo;
