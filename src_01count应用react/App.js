import React,{Component} from 'react';

export default class App extends Component{

  state={
    count:0
  }

  increment = () =>{
    const number = this.refs.numberSelect.value*1;
    this.setState({
      count:this.state.count+number
    })
  }

  decrement = () =>{
    const number = this.refs.numberSelect.value*1;
    this.setState({
      count:this.state.count-number
    })
    
  }

  incrementIfOdd = () =>{
    const number = this.refs.numberSelect.value*1;
    const count = this.state.count
    if(count%2===1){
      this.setState({
        count:count+number
      })
    }
  }

  incrementAsync = () =>{
    const number=this.refs.numberSelect.value*1;
    setTimeout(()=>{
      this.setState({
        count:this.state.count+number
      })
    },1000)
  }
  render(){
    const count = this.state.count;
    return(
      <div>
        <p>click {count} times</p>
        <select ref="numberSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>imcrement async</button>&nbsp;
      </div>
    )
  }
}