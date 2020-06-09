import React from 'react';
import { DefaultLayout, Section } from '~/layouts';
import { WorldMap, Typography, List, Card } from '~/components';

const Home = () => {
  return (
    <DefaultLayout>
      <div className='home'>
        <Typography.Heading center>Corona App Tracker</Typography.Heading>
        <Section>
          <List size='33'>
            <List.ListItem>
              <Card>
                <Typography.Heading Type='h3'>Country Name</Typography.Heading>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
              </Card>
            </List.ListItem>
            <List.ListItem>
              <Card>
                <Typography.Heading Type='h3'>Country Name</Typography.Heading>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
              </Card>
            </List.ListItem>
            <List.ListItem>
              <Card>
                <Typography.Heading Type='h3'>Country Name</Typography.Heading>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
              </Card>
            </List.ListItem>
          </List>
        </Section>
        <Section>
          <WorldMap />
        </Section>
        <Section>
          <List size='25'>
            <List.ListItem>
              <Card>
                <Typography.Heading Type='h4'>Country Name</Typography.Heading>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
              </Card>
            </List.ListItem>
            <List.ListItem>
              <Card>
                <Typography.Heading Type='h4'>Country Name</Typography.Heading>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
              </Card>
            </List.ListItem>
            <List.ListItem>
              <Card>
                <Typography.Heading Type='h4'>Country Name</Typography.Heading>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
              </Card>
            </List.ListItem>
            <List.ListItem>
              <Card>
                <Typography.Heading Type='h4'>Country Name</Typography.Heading>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
                <Typography.Text>Country Text</Typography.Text>
              </Card>
            </List.ListItem>
          </List>
        </Section>
      </div>
    </DefaultLayout>
  );
};

export default Home;
