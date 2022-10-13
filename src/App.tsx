import React from 'react';

import Link from '@/components/atoms/Link';
import './App.css';
import TextInput from '@/components/atoms/TextInput';

function App() {
  return (
    <div className="App">
      <TextInput />

      <Link className="App-link" href="https://reactjs.org" isTarget={true}>
        Learn React
      </Link>
    </div>
  );
}

export default App;
