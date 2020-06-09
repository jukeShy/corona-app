import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, List, Card } from '~/components';
import { getCountries } from '~/redux/actions/countriesActions';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.items);
  const isLoading = useSelector((state) => state.countries.isLoading);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const _countries = countries.map((country) => (
    <List.ListItem>
      <Card>
        <Typography.Heading Type='h4'>{country.name}</Typography.Heading>
      </Card>
    </List.ListItem>
  ));

  return (
    <>
      <List size='100'>{isLoading ? 'Loading...' : _countries}</List>
    </>
  );
};

export default Countries;
