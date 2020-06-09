import React from 'react';
import { Typography } from '~/components';
import './styles.scss';

const Alert = ({ top, left, show, title }) => {
  return (
    <div
      className={`alert ${show ? 'show' : ''}`}
      style={{ top: top + 10, left: left + 10 }}
    >
      <Typography.Text>{title}</Typography.Text>
    </div>
  );
};

export default Alert;
