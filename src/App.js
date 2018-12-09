import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input:""
    };
  }

  // 계산기 버튼을 누를 때 인풋값을 스테이트 인풋에 업데이트 하는 함수 
  addToInput = val => {
    this.setState({input: this.state.input + val});
  };

  // mathjs를 이용한 값 계산하는 함수
  handleEqual = () => {
    this.setState({input: math.eval(this.state.input)});
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input:""})}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
