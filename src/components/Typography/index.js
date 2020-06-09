import React from 'react';
import { Heading } from './Heading/Heading';
import { Text } from './Text/Text';
import './styles.scss';

const Typography = {
  Heading: ({ children, ...props }) => <Heading {...props}>{children}</Heading>,
  Text: ({ children, ...props }) => <Text {...props}>{children}</Text>,
};

export default Typography;
