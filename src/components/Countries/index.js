import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, List, Card } from '~/components';

const Countries = () => {
  const countries = useSelector((state) => state.countries);

  const _countries = countries.map((country) => (
    <List.ListItem>
      <Card>
        <Typography.Heading Type='h4'>{country.name}</Typography.Heading>

        <Typography.Text alignBetween>
          <span>Confirmed:</span>
          <span>{country.confirmed.value}</span>
        </Typography.Text>

        <Typography.Text alignBetween>
          <span>Recovered:</span>
          <span>{country.recovered.value}</span>
        </Typography.Text>

        <Typography.Text alignBetween>
          <span>Deaths:</span>
          <span>{country.deaths.value}</span>
        </Typography.Text>
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
