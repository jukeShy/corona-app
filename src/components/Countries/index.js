import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, List, Card, Filter } from '~/components';

const Countries = ({ data }) => {
  const [countries, setCountries] = useState(data);

  const _countries = countries.map((country) => (
    <List.ListItem key={country.name}>
      <Link to={`/country/${country.iso2}`}>
        <Card>
          <Typography.Heading Type='h4'>{country.name}</Typography.Heading>
        </Card>
      </Link>
    </List.ListItem>
  ));

  const onSubmitHandler = (value) => {
    if (!value) return setCountries(data);

    const filtered = countries.filter((country) => country.name === value);

    if (!filtered.length) return setCountries(data);

    setCountries(filtered);
  };

  return (
    <>
      <Filter onSubmit={onSubmitHandler} />
      <List size='33'>{_countries}</List>
    </>
  );
};

export default Countries;
