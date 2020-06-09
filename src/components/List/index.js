import React from 'react';
import { ListContext } from './ListContext';
import { ListItem } from './ListItem';

const List = ({ children, size = 25 }) => {
  return (
    <div className='row'>
      <ListContext.Provider value={size}>{children}</ListContext.Provider>
    </div>
  );
};

List.ListItem = ListItem;

export default List;
