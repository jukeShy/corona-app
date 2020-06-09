import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, List, Card } from '~/components';

const TotalStats = () => {
  const totalStats = useSelector((state) => state.totalStats);

  const _totalStats = totalStats.map((stats) => (
    <List.ListItem>
      <Card>
        <Typography.Heading Type='h3' style={{ textTransform: 'uppercase' }}>
          {stats.label}
        </Typography.Heading>
        <Typography.Heading Type='h3'>{stats.value}</Typography.Heading>
      </Card>
    </List.ListItem>
  ));

  console.log(_totalStats);

  return (
    <>
      <List size='33'>{_totalStats}</List>
    </>
  );
};

export default TotalStats;
