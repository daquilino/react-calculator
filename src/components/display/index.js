import React, { Component } from 'react';
import './display.css'


function Display (props){
    return (<div className={"display"}>{props.results}</div>)
}


// Future more advanced display
// allow typing values, 
// class Display extends Component {

//     constructor(props){
//         super(props);
//         this.state ={value: props.value}
//     }
    
//     onChange = (event)=> this.setState({value: event.target.value});

//     render() {
//         console.log("display renders")
//         return (<input type="text" value={this.props.value} onChange={this.onChange}></input>)
//     }
// }

export default Display;


