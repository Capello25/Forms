import React, { Component,setState } from "react";
import './App.css'

class StateClassCounter extends Component{
constructor(props){
    super(props)
    this.state={
        counter:0,
    }
   
    this.Increase = this.Increase.bind(this);
    this.Decrease = this.Decrease.bind(this);


}


Increase(e){
    e.preventDefault();
    this.setState({
        counter:this.state.counter + 1
       
    })
    console.log(this.state.counter);
}

Decrease(e){
    e.preventDefault();
    this.setState({
        counter:this.state.counter -1
    })
}

    render(){
        return(
       <div>
           <h1>Counter : {this.state.counter}</h1>
           <button className="btnIn" onClick={this.Increase}>Increase </button>
           <button className="btndec" onClick={this.Decrease}>Decrease</button>
       </div>
            )
    }
   

}

export default StateClassCounter