import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountryStats } from '~/redux/actions/countriesActions';
import { DefaultLayout, Section } from '~/layouts';
import { TotalStats, Typography, ChartPie } from '~/components';

const Country = ({ match, location }) => {
  const dispatch = useDispatch();
  const countryStats = useSelector((state) => state.countries.country);
  const isCountryStatsLoading = useSelector(
    (state) => state.countries.isLoading,
  );

  useEffect(() => {
    const iso = match.params.name;

    dispatch(getCountryStats(iso));
  }, [match.params.name, dispatch]);

  return (
    <DefaultLayout>
      <Section>
        <Typography.Heading center>Corona App Tracker</Typography.Heading>
      </Section>
      {isCountryStatsLoading ? (
        'Loading...'
      ) : (
        <>
          <Section>
            <Typography.Heading Type='h2' center>
              Country: {location.state.name}
            </Typography.Heading>
          </Section>
          <Section>
            <TotalStats data={countryStats} />
          </Section>
          <Section>
            <ChartPie data={countryStats} />
          </Section>
        </>
      )}
    </DefaultLayout>
  );
};

export default Country;
