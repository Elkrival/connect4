import React, { Component } from 'react';

class Circle extends Component {
  render () {
    const {color} = this.props.gridState[this.props.col][this.props.id];
    return (
      <div data-id={this.props.id} data-color={color} className="circle">{this.props.id}</div>
    )
  }
}

export default Circle;
