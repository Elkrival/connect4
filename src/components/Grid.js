import React, {  Component} from 'react'
import Column from './Column'

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let columns = [];
    for(var i = 0; i < this.props.columns; i++) {
      columns.push(<Column gridState={this.props.gridState} height={6} id={i} key={i} />)
    }
    return (
      <div className="grid">
      {columns}
      </div>
    )
  }
}

export default Grid
