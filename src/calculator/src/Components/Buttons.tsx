import React from 'react';
import { useState } from 'react';
import { IButtonprops} from "../Interface/interface";
import "./Buttons.css";

const Buttons = ({_changeResult ,result} : IButtonprops ) => {

    const numbers   = ["1","2","3","4","5","6","7","8","9","0"];
    const operators = ["*","+","-","/"];
    const buttonValues = [...numbers,...operators,".","="];

    //need to handle number of dots
    const [isDotPressed,setIsDotPressed]= useState(false);
    const [isEqualpressed,setIsEqualpressed] = useState(false);
    const [expression,setExpression] = useState("0");

const _handleNumber =  (digit : string) =>{
    if(isEqualpressed === true) {
        setExpression(digit);
        _changeResult(digit);
        setIsEqualpressed(false);
    }  else { 
        
        if ( expression !== "0" ) {

            let temp= `${expression}${digit}`;
            setExpression(temp);
            _changeResult(temp);
        }
        else if(digit !== "0"){
            setExpression(digit);
            _changeResult(digit);
        }
    }
}
     
const _handleOperator = (operator : string) => {

    const lastIndex = expression.length-1;
    if(expression[lastIndex] === ".") {
        const temp=expression.slice(0,lastIndex);
        // handle 8*.+8 type cases and 7.+8 
        if(operators.includes(temp[temp.length-1])) {
           setExpression(`${temp.slice(0,temp.length-1)}${operator}`);
          _changeResult(`${temp.slice(0,temp.length-1)}${operator}`);  
        } else {
             setExpression(`${temp}${operator}`); 
             _changeResult(`${temp}${operator}`);
        }
    }  else {
    if(operators.includes(expression[lastIndex] )) {
        setExpression(`${expression.slice(0,lastIndex)}${operator}`);
        _changeResult(`${expression.slice(0,lastIndex)}${operator}`);
    } else {
            if(isEqualpressed === false  ){
                let temp:number = eval(`${expression}`);
                let temps:string = temp.toString();
                _changeResult(`${temps}${operator}`);
                setExpression(`${expression}${operator}`);
            } else{

                const temp= `${expression}${operator}`;
                setExpression(temp);
                _changeResult(temp);
            }
        }
}
    setIsEqualpressed(false);
    setIsDotPressed(false);
}


 const _handleEqualSign = ()=> {
    const lastIndex = expression.length-1;
    if(!operators.includes(expression[lastIndex] )&& !isEqualpressed ) {
        let  temp = eval(`${expression}`);
        _changeResult(temp);
        setExpression(temp);
        setIsEqualpressed(true);
        setIsDotPressed(false);
    }
 }
 const _handleClear = ()=> {
    setIsDotPressed(false);
    setIsEqualpressed(false);
    setExpression("0");
    _changeResult("0");
 }

 const _handleDot = ()=> {
     if(!isDotPressed){
        setIsDotPressed(true);
        setIsEqualpressed(false);
        const temp=`${expression}.`;
        setExpression(temp);
        _changeResult(temp);
     }
 }

 const _handleClick = (selectedButton:string) => {

         if(numbers.includes(selectedButton)) 
            _handleNumber(selectedButton);

         if(operators.includes(selectedButton)) 
            _handleOperator(selectedButton);

         if(selectedButton === "=") 
            _handleEqualSign();

         if(selectedButton === ".")
            _handleDot();

         if(selectedButton === "clear")
            _handleClear();
  }

    return (
        <div className = "btns">
             {
                buttonValues.map( (value,index) =>
                <button key ={`${value}-${index}-renderButtons`} 
                        onClick = { () =>  _handleClick(value) }
                >{value}
                </button>    
                )
                }
            <button className ="clear-btn"
             onClick={() => _handleClick("clear")}
            >CLEAR
            </button>

        </div>
    )
}
export default Buttons;


