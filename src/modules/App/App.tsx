import React, { useState } from 'react';

import Link from '@/components/Link';
import './App.style.scss';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import List from '@/components/List';

function App() {
  const [listItems, setListItem] = useState<Array<{}>>([]);
  return (
    <div className="app">
      <div className="app__form-group">
        <TextInput />

        <Button children="Add Task" />
      </div>

      <div className="app__list">
        <List />
      </div>

      <Link className="app__link" href="https://reactjs.org" isTarget={true}>
        Learn React
      </Link>
    </div>
  );
}

export default App;
