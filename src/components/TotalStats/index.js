import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalStats } from '~/redux/actions/totalStatsActions';
import { Typography, List, Card } from '~/components';

const TotalStats = () => {
  const dispatch = useDispatch();
  const totalStats = useSelector((state) => state.totalStats.stats);
  const isLoading = useSelector((state) => state.totalStats.isLoading);

  useEffect(() => {
    dispatch(getTotalStats());
  }, [dispatch]);

  const _totalStats = totalStats.map((stats) => (
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
      <List size='33'>{isLoading ? 'Loading...' : _totalStats}</List>
    </>
  );
};

export default TotalStats;
