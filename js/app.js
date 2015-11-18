import React from 'react';
import Box from './Box';
//import HexBoard from './HexBoard';
//
import {Motion, spring} from 'react-motion';
// In your render...

var createBoxes = function(num){
  var boxes = [];
  for (let i = 0; i < num; i++){
    let number = Math.floor(Math.random()*num);
    let color = 255-Math.floor(255*(i/num));
    
    boxes.push({
      id:i, 
      number:number, 
      color:color,
    });
  };
  
  return boxes;
};

var shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var boxes = createBoxes(55);

class BoxApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      size: 60,
      length: 10,
      boxes: boxes
    }
  }
  sortByColor(){
    const new_boxes = this.state.boxes.sort(function(box_a, box_b){
      return box_b.color - box_a.color;
    });
    this.setState({boxes: new_boxes});
  }
  sortByNumber(){
    const new_boxes = this.state.boxes.sort(function(box_a, box_b){
      return box_a.number - box_b.number;
    });
    this.setState({boxes: new_boxes});  
  }
  sortByRandom(){
    const new_boxes = shuffle(this.state.boxes);
    this.setState({boxes: new_boxes});    
  }
  handleNumberChange(event){
    this.setState({
      length: event.target.value
    });
  }
  renderBoxes(){
    const size = this.state.size;
    const length = this.state.length;
    const Boxes = this.state.boxes.map((box, index)=>{
      const shift = {
        top: size*Math.floor(index/length),
        left: size*(index%length)
      }
      return (
        <Motion style={{top: spring(shift.top), left: spring(shift.left)}} key={box.id}>
          {shift => <Box box={box} shift={shift}/>}
        </Motion>
      );
    });
    
    return Boxes;
  }
  render(){
    const Boxes = this.renderBoxes();
    
    return (
      <div>
        <button onClick={this.sortByColor.bind(this)}>Sort by color</button>
        <button onClick={this.sortByNumber.bind(this)}>Sort by number</button>
        <button onClick={this.sortByRandom.bind(this)}>Sheffle</button>
        <label>number per row:</label>
        <input type="number" name="row" min="1" onChange={this.handleNumberChange.bind(this)}/>
        <div style={{position:"relative"}}>
          {Boxes}
        </div>
      </div>
    );
  }
}

React.render(
    <BoxApp/>, 
    document.getElementById("app")
);


//class Counter extends React.Component{
//  render(){
////    console.log(this.props.xxx.y);
//    return (
//      <div style={{
//        transform: `translate3d(${this.props.xxx.y}px, 0, 0)`
//      }}>
//        {this.props.xxx.y}
//      </div>
//    );
//  }
//}
//
//class Counters extends React.Component{
//  constructor(props){
//    super(props);
//    this.clickAddBtn = this.clickAddBtn.bind(this);
//    this.clickMiusBtn = this.clickMiusBtn.bind(this);
//
//    this.state = {
//      xxx: this.props.xxx
//    }
//  }
//  clickAddBtn(){
//    let xxx = {y: this.state.xxx.y+50}
//    this.setState({xxx: xxx});
//  }
//  clickMiusBtn(){
//    let xxx = {y: this.state.xxx.y-50}
//    this.setState({xxx: xxx});
//  }
//  renderCounter(){
//    const arr = [1,2,3,4,5];
//    const xxx = this.state.xxx;
//    const Counters = arr.map((item)=>{
//      return (
//        <Motion style={{y: spring(xxx.y)}}>
//          {xxx => <Counter xxx={xxx}/>}
//        </Motion>
//      );
//    });
//    return Counters;
//  }
//  render(){
//    const Counters = this.renderCounter();
//    return (
//      <div>
//        {Counters}
//        <button onClick={this.clickAddBtn}>+50</button>
//        <button onClick={this.clickMiusBtn}>-50</button>
//      </div>
//    );
//  }
//}
//
//React.render(
//    <Counters xxx={{y: 50}}/>,
//    document.getElementById("app")
//);