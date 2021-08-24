import React from 'react';
import { IResultprops} from "../Interface/interface";
import "./Result.css";

const Result = ({result}:IResultprops) => {
    return (
        <div className="result-field">
            <input type="text" value={result} 
            />
        </div>
    )
}

export default Result;
