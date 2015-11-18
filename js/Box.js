import React from 'react';

export default class Box extends React.Component{
  constructor(props){
    super(props);
    
//    this.handleClick = this.handleClick.bind(this);
//    this.handleMouseEnter = this.handleMouseEnter.bind(this);
//    this.handleMouseLeave = this.handleMouseLeave.bind(this);
//    this.state = {
//      hover: false
//    };
  }
  render(){
    const size = {
      width: "60px",
      height: "60px",
    }
    const gray = this.props.box.color;
    const backgroundColor = `rgb(${gray},${gray},${gray})`
    return (
      <div style={{...style.box, ...size, ...this.props.shift, backgroundColor}}>{this.props.box.number}</div>
    );
  }
};

const style = {
  box: {
    position: "absolute",
    border: "1px solid black",
    fontSize: "200%",
    textAlign: "center",
    lineHeight: "200%"
  }
}

Box.propTypes = { 
//  center: React.PropTypes.object.required,
//  size: React.PropTypes.number.required,
//  hex: React.PropTypes.object.required
};

Box.defaultProps = { 
//  scale: 1.0 
};