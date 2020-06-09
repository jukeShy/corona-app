import React, { useContext } from 'react';
import { ListContext } from '../ListContext';
import './styles.scss';

const ListItem = ({ children }) => {
  const context = useContext(ListContext);

  return <div className={`column column-${context}`}>{children}</div>;
};

export { ListItem };
