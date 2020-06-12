import React from 'react';
import { Typography, List, Card } from '~/components';

const Countries = ({ data }) => {
  const _countries = data.map((country) => (
    <List.ListItem key={country.name}>
      <Card>
        <Typography.Heading Type='h4'>{country.name}</Typography.Heading>
      </Card>
    </List.ListItem>
  ));

  return (
    <>
      <List size='33'>{_countries}</List>
    </>
  );
};

export default Countries;
