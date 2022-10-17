import React from 'react';

import Link from '@/components/atoms/Link';
import './App.css';
import TextInput from '@/components/atoms/TextInput';
import Button from '@/components/atoms/Button';
import TrashIcon from '@/assets/icons/Trash';

function App() {
  return (
    <div className="App">
      <div className="form-group">
        <TextInput />

        <Button children="Add Task" />
      </div>

      <div className="list-wrapper">
        <ul className="list">
          <li className="list-item" style={{ listStyle: 'none' }}>
            <span className="list-item__text">Some text</span>
            <Button children={<TrashIcon />} color="red" />
          </li>
        </ul>
      </div>

      <Link className="App-link" href="https://reactjs.org" isTarget={true}>
        Learn React
      </Link>
    </div>
  );
}

export default App;
