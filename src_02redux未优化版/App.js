import React,{Component} from 'react';
import PropTypes from 'prop-types'
import { increment,decrement } from './redux/actions'

export default class App extends Component{

  static propTypes = {
    store:PropTypes.object.isRequired
  }

  increment = () =>{
    const number = this.refs.numberSelect.value*1;
    //通过store更新状态
    this.props.store.dispatch(increment(number))
  }

  decrement = () =>{
    const number = this.refs.numberSelect.value*1;
    this.props.store.dispatch(decrement(number))
    
  }

  incrementIfOdd = () =>{
    const number = this.refs.numberSelect.value*1;
    const count = this.props.store.getState();
    if(count%2===1){
      this.props.store.dispatch(increment(number))
    }
  }

  incrementAsync = () =>{
    const number=this.refs.numberSelect.value*1;
    setTimeout(()=>{
      this.props.store.dispatch(increment(number))
      //type是唯一标识
    },1000)
  }
  render(){
    const count = this.props.store.getState();
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