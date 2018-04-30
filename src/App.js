import React, { Component } from 'react';
import { Provider } from 'unstated'

import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <Provider>
        <Counter />
      </Provider>
    );
  }
}

export default App;
