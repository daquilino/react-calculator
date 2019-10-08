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

    this.decimalFlag = false;

  }

  clear = () => {
    this.decimalFlag = false;
    this.setState({ num1: 0, num2: 0, result: 0, operator: null });
  }

  // handles equal button click
  calculate = () => {
    console.log("...calculating")
  }

  // handles number button click
  numberButtonHandler = (num) => {

    console.log("num:", num);

    //disables decimal button when pressed as to only use once.
    //if (data === ".") this.decimalFlag = true;

    //this means we are still entering first number
    //if (!this.state.operator && role === "number") {

   // }

    //if (role === "operator") this.setState({ operator: data });


    //this.setState({ result: "hello" })
  }

  // handles operator button click
  operatorButtonHander = (oper)=>{
    console.log("oper:", oper);
  }
  

  render() {
    return (
      <main className="container">
        <Row>
          <div className="calculator col-sm-6 col-lg-4" >
            <Row>
              <Display display={this.state.display} />
            </Row>
            <Row>
              <Button name={7} onClick={this.numberButtonHandler} />
              <Button name={8} onClick={this.numberButtonHandler} />
              <Button name={9} onClick={this.numberButtonHandler} />
              <Button name={"+"} onClick={this.operatorButtonHandler} />
            </Row>
            <Row>
              <Button name={4} onClick={this.numberButtonHandler} />
              <Button name={5} onClick={this.numberButtonHandler} />
              <Button name={6} onClick={this.numberButtonHandler} />
              <Button name={"-"} onClick={this.operatorButtonHandler} />
            </Row>
            <Row>
              <Button name={1} onClick={this.numberButtonHandler} />
              <Button name={2} onClick={this.numberButtonHandler} />
              <Button name={3} onClick={this.numberButtonHandler} />
              <Button name={"x"} onClick={this.operatorButtonHandler} />
            </Row>
            <Row>
              <Button name={"."}  onClick={this.click} disabled={this.decimalFlag} />
              <Button name={0}  onClick={this.numberButtonHandler} />
              <Button name={"C"} onClick={this.clear} />
              <Button name={"/"}  onClick={this.operatorButtonHander} />
            </Row>
            <Row><Button name={"="} col={12} onClick={this.calculate} /></Row>

          </div>
        </Row>
      </main>
    );
  }
}

export default App;
