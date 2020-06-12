import React from 'react';
import { useSelector } from 'react-redux';
import { DefaultLayout, Section } from '~/layouts';
import {
  WorldMap,
  TotalStats,
  Typography,
  Countries,
  Spinner,
} from '~/components';

const Home = () => {
  const totalStats = useSelector((state) => state.totalStats.stats);
  const isTotalStatsLoading = useSelector(
    (state) => state.totalStats.isLoading,
  );
  const countries = useSelector((state) => state.countries.items);
  const isCountriesLoading = useSelector((state) => state.countries.isLoading);

  return (
    <DefaultLayout>
      <div className='home'>
        <Section>
          <Typography.Heading center>Corona App Tracker</Typography.Heading>
        </Section>
        <Section>
          {isTotalStatsLoading ? <Spinner /> : <TotalStats data={totalStats} />}
        </Section>
        <Section>
          <WorldMap />
        </Section>
        <Section>
          {isCountriesLoading ? <Spinner /> : <Countries data={countries} />}
        </Section>
      </div>
    </DefaultLayout>
  );
};

export default Home;
