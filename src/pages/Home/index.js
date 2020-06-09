import React from 'react';
import { DefaultLayout, Section } from '~/layouts';
import { WorldMap, TotalStats, Typography, Countries } from '~/components';

const Home = () => {
  return (
    <DefaultLayout>
      <div className='home'>
        <Typography.Heading center>Corona App Tracker</Typography.Heading>
        <Section>
          <TotalStats />
        </Section>
        <Section>
          <WorldMap />
        </Section>
        <Section>
          <Countries />
        </Section>
      </div>
    </DefaultLayout>
  );
};

export default Home;
