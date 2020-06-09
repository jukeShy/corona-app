import React from 'react';
import './styles.scss';

const Heading = ({ Type = 'h1', children, center, ...props }) => {
  return (
    <Type
      {...props}
      className={`typography-heading ${center ? 'text-center' : ''}`}
    >
      {children}
    </Type>
  );
};

export { Heading };
