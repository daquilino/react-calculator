import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import Row from './components/row';
import Display from './components/display'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      operator: null,
      result: 0,
      display: 0
    }

    let decimalFlag = false;

  }

  clear = ()=>{
    this.setState({num1:0, num2:0, result:0, operator:null})
  }

  click = (data, type)=>{
      console.log("data:", data, "type:", type);
      
      //this means we are still entering first number
      if(!this.state.operator && type === "number"){

      }


      this.setState({result: "hello"})
  }

  calculate = ()=>{
    console.log("...calculating")
  }

  render() {
    return (
      <main className="container">
        <Row>
        <div className="calculator col-md-3" >

          <Row>
            <Display display={this.state.display} />
          </Row>
          <Row>
            <Button name={7} type={"number"} onClick={this.click} />
            <Button name={8} type={"number"} onClick={this.click}/>
            <Button name={9} type={"number"} onClick={this.click}/>
            <Button name={"+"} type={"operator"} onClick={this.click}/>
          </Row>
          <Row>
            <Button name={4} type={"number"} onClick={this.click}/>
            <Button name={5} type={"number"} onClick={this.click}/>
            <Button name={6} type={"number"} onClick={this.click}/>
            <Button name={"-"} type={"operator"} onClick={this.click}/>
          </Row>
          <Row>
            <Button name={1} type={"number"} onClick={this.click}/>
            <Button name={2} type={"number"} onClick={this.click}/>
            <Button name={3} type={"number"} onClick={this.click}/>
            <Button name={"x"} type={"operator"} onClick={this.click}/>
          </Row>
          <Row>
            <Button name={"."} type={"number"} onClick={this.click}/>
            <Button name={0} type={"number"} onClick={this.click}/>
            <Button name={"C"} onClick={this.clear} />
            <Button name={"/"} type={"operator"} onClick={this.click}/>
          </Row>
          <Row><Button name={"="} col={12} onClick={this.calculate}/></Row>

        </div>
        </Row>
      </main>
    );
  }
}

export default App;
