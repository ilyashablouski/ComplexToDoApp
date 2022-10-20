import React from 'react';

import Button from '@/components/Button';
import TrashIcon from '@/assets/icons/Trash';

interface IListProps {}

const List: React.FC<IListProps> = () => (
  <ul className="list">
    <li className="list-item" style={{ listStyle: 'none' }}>
      <span className="list-item__text">Some text</span>
      <Button children={<TrashIcon />} color="red" />
    </li>

    <li className="list-item" style={{ listStyle: 'none' }}>
      <span className="list-item__text">Some text2</span>
      <Button children={<TrashIcon />} color="red" />
    </li>
  </ul>
);

export default List;
