import React from 'react';
import './button.css'

function Button(props){

    return(
        <button className={`btn btn-light col-${props.col}`} onClick={()=>props.onClick(props.name, props.type)}>{props.name}</button>
    )
}

export default Button;