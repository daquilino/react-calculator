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
      result: 0
    }
  }


  clear = ()=>{
    this.setState({num1:0, num2:0, result:0})
  }

  click = (data)=>{
      console.log("data:", data);
      this.setState({result: "hello"})
  }


  render() {
    return (
      <main className="container">
        <div className="calculator">

          <Row>
            <Display value={this.state.result} />
          </Row>
          <Row>
            <Button name={7} onClick={this.click} />
            <Button name={8} />
            <Button name={9} />
            <Button name={"+"} />
          </Row>
          <Row>
            <Button name={4} />
            <Button name={5} />
            <Button name={6} />
            <Button name={"-"} />
          </Row>
          <Row>
            <Button name={1} />
            <Button name={2} />
            <Button name={3} />
            <Button name={"x"} />
          </Row>
          <Row>
            <Button name={"."} />
            <Button name={0} />
            <Button name={"C"} onClick={this.clear} />
            <Button name={"/"} />
          </Row>
          <Row><Button name={"="} col={12} /></Row>

        </div>
        <p>Need to figure out the display form onChange.  Maybe not use an input for diplay.</p>
      </main>
    );
  }
}

export default App;
