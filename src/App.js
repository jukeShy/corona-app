import React, { useEffect } from 'react';
import { Home } from '~/pages';
import { CoronaApi } from './api/corona.api';

const App = () => {
  const coronaApi = CoronaApi();

  useEffect(() => {
    const fetchData = async () => {
      const data = await coronaApi.getCountries();

      console.log(data);
    };

    fetchData();
  }, [coronaApi]);

  return (
    <>
      <Home />
    </>
  );
};

export { App };
