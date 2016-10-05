import React, { Component } from 'react';
import '../stylesheets/App.css';
import Grid from "./Grid"

class App extends Component {
  constructor(props) {
    super(props)
    let gridState = [];

    for (let i = 0; i < props.columns; i++) {
      let newArr = [];
      for (let k = 0; k < props.rows; k++) {
        newArr[k] = {
          color: 'white'
        }
      }
      gridState[i] = newArr;
    }

    gridState[0][0].color = 'green';

    this.state = {
      turn: 'yellow',
      gridState
    }
  }

  render() {
    return (
      <div className="App">
        <Grid gridState={this.state.gridState} columns={this.props.columns} rows={this.props.rows} />
      </div>
    );
  }
}

export default App;
