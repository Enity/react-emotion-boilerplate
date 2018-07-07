import React, { Component } from 'react';

import styled from 'react-emotion';

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <h1 className="App-title">Welcome to React</h1>
        </Header>
      </div>
    );
  }
}

export default App;
