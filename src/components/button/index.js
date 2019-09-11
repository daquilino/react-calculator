import React from 'react';
import './button.css'

function Button(props){

    return(
        <button className={`btn btn-info col-${props.col}`}>{props.name}</button>
    )
}

export default Button;