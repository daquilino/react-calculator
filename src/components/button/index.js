import React from 'react';
import './button.css'

function Button(props){
    return(
        <div className={`${props.col ? `col-${props.col}`: `col`}`}  >
        <button 
            className={`btn btn-dark`} 
            onClick={()=>props.onClick(props.name)} 
            disabled={props.disabled}
        >
            {props.name}
        </button>
        </div>
        
    )
}

export default Button;