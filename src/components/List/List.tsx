import React from 'react';

import { IListItemsPayload } from '@/services/requests';
import Button from '@/components/Button';
import TrashIcon from '@/assets/icons/Trash';

interface IProps {
  listItems: IListItemsPayload[] | null;
}

const List: React.FC<IProps> = ({ listItems }) => {
  return listItems ? (
    <ul className="list">
      {listItems.map((listItem, index) => {
        if (index < 10) {
          return (
            <li
              key={listItem.id}
              className="list-item"
              style={{ listStyle: 'none' }}
            >
              <span className="list-item__text">{listItem.title}</span>
              <Button children={<TrashIcon />} color="red" />
            </li>
          );
        } else return;
      })}
    </ul>
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(List);
