import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTotalStats } from '~/redux/actions/totalStatsActions';
import { getCountries } from '~/redux/actions/countriesActions';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Home, Country } from '~/pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalStats());
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/country/:name' exact component={Country} />
      <Redirect to='/' />
    </BrowserRouter>
  );
};

export { App };
