import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import Row from './components/row';
import Display from './components/display'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num1: "0",
      num2: "0",
      operator: null,
      result: 0,
      display: "0",
      disableAll: false
    }

    this.decimalFlag = false;


    // Test code to keep entering numbers and operators. Alsoused flag above; 
    //this.secondOp = false;
  }

  //==================================================================================
  // handles number button click
  numberButtonHandler = (num) => {

    //disables decimal button when pressed as to only use once per number.
    if (num === ".") this.decimalFlag = true;

    let tempnum;

    // operator button not pressed, entering first number
    if (!this.state.operator) {
      tempnum = this.state.num1;

      // Toggles number to neg/pos if 'Neg' button pressed
      if (num === "Neg") tempnum = (parseInt(tempnum) * -1).toString(); 
      //Ternary used to remove leading zero from number unless decimal less than 1; 
      else tempnum = (tempnum === "0" && num !== ".") ? num.toString() : tempnum + num;
      

      this.setState({ num1: tempnum, display: tempnum });
    }
    // Entering second number
    else {
      // Test code to keep entering numbers and operators. Alsoused flag above; 
      //this.secondOp = true;
      
      tempnum = this.state.num2;
      
      // Toggles number to neg/pos if 'Neg' button pressed
      if (num === "Neg") tempnum = (parseInt(tempnum) * -1).toString();
      //Ternary used to remove leading zero from number unless decimal less than 1;  
      else tempnum = (tempnum === "0" && num !== ".") ? num.toString() : tempnum + num;
      

      this.setState({ num2: tempnum, display: tempnum });

    }
  }

  //==================================================================================
  // handles operator button click
  // When clicked sets operator, also reinstates decimal button through flag for use in second number
  operatorButtonHandler = (oper) => {
    this.decimalFlag = false;
    this.setState({ operator: oper });
    
    
    // Test code to keep entering numbers and operators. Alsoused flag above;  
    this.calculate();
  }

  //==================================================================================
  clear = () => {
    this.decimalFlag = false;
    this.setState({ num1: "0", num2: "0", result: "0", operator: null, display: "0", disableAll: false });
  }

  //==================================================================================
  // handles equal button click
  calculate = () => {

    let result;

    switch (this.state.operator) {
      case "+":
        result = (parseInt(this.state.num1) + parseInt(this.state.num2)).toString();
        this.setState({ result: result, display: result, num1: result, num2: "0" });
        break;
      case "-":
        result = (parseInt(this.state.num1) - parseInt(this.state.num2)).toString();
        this.setState({ result: result, display: result, num1: result, num2: "0" });

        break;
      case "×":
        result = (parseInt(this.state.num1) * parseInt(this.state.num2)).toString();
        this.setState({ result: result, display: result, num1: result, num2: "0" });

        break;
      case "÷":
        // Checks in denominator is zero before divide, 
        result = (this.state.num2 === "0")
          ? "Cannot Divide By Zero"
          : (parseInt(this.state.num1) / parseInt(this.state.num2)).toString();

        this.setState({ result: result, display: result, disableAll: true });

        break;

      default:
        break;
    }
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
              <Button name={7} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
              <Button name={8} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
              <Button name={9} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
              <Button name={"+"} onClick={this.operatorButtonHandler} disabled={this.state.disableAll} />
            </Row>
            <Row>
              <Button name={4} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
              <Button name={5} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
              <Button name={6} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
              <Button name={"-"} onClick={this.operatorButtonHandler} disabled={this.state.disableAll} />
            </Row>
            <Row>
              <Button name={1} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
              <Button name={2} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
              <Button name={3} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
              <Button name={"×"} onClick={this.operatorButtonHandler} disabled={this.state.disableAll} />
            </Row>
            <Row>
              <Button name={"."} onClick={this.numberButtonHandler} disabled={this.decimalFlag || this.state.disableAll} />
              <Button name={0} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
              <Button name={"C"} onClick={this.clear} />
              <Button name={"÷"} onClick={this.operatorButtonHandler} disabled={this.state.disableAll} />
            </Row>
            <Row>
              <Button name={"="} col={9} onClick={this.calculate} disabled={this.state.disableAll} />
              <Button name={"Neg"} col={3} onClick={this.numberButtonHandler} disabled={this.state.disableAll} />
            </Row>

          </div>
        </Row>
      </main>
    );
  }
}

export default App;
