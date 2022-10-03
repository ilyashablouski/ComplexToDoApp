import React from 'react';

import Link from '@/components/atoms';

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Link href="https://reactjs.org">Learn React</Link>

        <Link className="App-link" href="https://reactjs.org" isTarget={true}>
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
