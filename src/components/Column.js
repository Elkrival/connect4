import React, {Component} from 'react'
import Circle from './Circle'

class Column extends Component {
  constructor(props) {
    super(props);
    this.circles = [];
    for (var i = 0; i < this.props.height; i++) {
      this.circles.push(<Circle gridState={props.gridState} color="white" col={this.props.id} id={i} key={i} />);
    }
  }
  render() {
    return (
      <div  className="column">
        <div>
         {this.circles}
        </div>
        <button data-id={this.props.id}>Hi {this.props.id}</button>
      </div>
    )
  }
}

export default Column
