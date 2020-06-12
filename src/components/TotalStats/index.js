import React from 'react';
import { Section } from '~/layouts';
import { Typography, List, Card } from '~/components';

const TotalStats = ({ data }) => {
  const _totalStats = data.map((stats) => (
    <List.ListItem key={stats.label}>
      <Card>
        <Typography.Heading Type='h3' style={{ textTransform: 'uppercase' }}>
          {stats.label}
        </Typography.Heading>
        <Typography.Heading Type='h3'>{stats.value}</Typography.Heading>
      </Card>
    </List.ListItem>
  ));

  return (
    <>
      {_totalStats.length ? (
        <>
          <Section>
            <List size='33'>{_totalStats}</List>
          </Section>
        </>
      ) : (
        'There is no data for this country'
      )}
    </>
  );
};

export default TotalStats;
