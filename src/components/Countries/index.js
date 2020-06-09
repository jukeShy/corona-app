import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, List, Card } from '~/components';

const Countries = () => {
  const countries = useSelector((state) => state.countries);

  const _countries = countries.map((country) => (
    <List.ListItem>
      <Card>
        <Typography.Heading Type='h4'>{country.name}</Typography.Heading>
      </Card>
    </List.ListItem>
  ));

  return (
    <>
      <List size='25'>{_countries}</List>
    </>
  );
};

export default Countries;
