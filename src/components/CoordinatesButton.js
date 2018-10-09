// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component{
  
<<<<<<< HEAD
 handleClick(event){
    let arr = []
    arr.push(event.clientX,event.clientY)
    return this.props.onReceiveCoordinates(arr);
=======
 mouseCoordinates(event){
    let arr = []
    arrr.push(event.clientX,event.clientY)
>>>>>>> 000eaf5269a4da4123e9c3123e21a7bce83227b6
  }
  
  render(){
    
    
    
    return(
      <div>
<<<<<<< HEAD
      <button onClick={this.handleClick.bind(this)}></button>
=======
      <button onClick={this.findCoors}></button>
>>>>>>> 000eaf5269a4da4123e9c3123e21a7bce83227b6
      </div>
      
      )
  }
  
  
}


export default CoordinatesButton;