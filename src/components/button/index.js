import React from 'react';
import './button.css'

function Button(props){
    return(
        <button 
            className={`btn btn-light col-${props.col}`} 
            onClick={()=>props.onClick(props.name, props.buttonrole)} 
            disabled={props.disabled}
        >
            {props.name}
        </button>
        
    )
}

export default Button;