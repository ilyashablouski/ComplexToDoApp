import React from 'react';

import Link from '@/components/atoms/Link';

import './App.css';

function App() {
  return (
    <div className="App">
      <Link className="App-link" href="https://reactjs.org" isTarget={true}>
        Learn React
      </Link>

      <input type="text" ref="textInput" />
    </div>
  );
}

export default App;
