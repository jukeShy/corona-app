import React from 'react';
import './styles.scss';

const Text = ({ children, alignBetween }) => {
  return (
    <p className={`typography-text ${alignBetween ? 'align-between' : ''}`}>
      {children}
    </p>
  );
};

export { Text };
