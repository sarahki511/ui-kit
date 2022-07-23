import React from 'react';

import Grid from './Grid';
import Box from '../Box/Box'
import GridRuler from '../GridRuler/GridRuler'


export default {
  title: 'Components/Layout/Grid',
  component: Grid,
};


export const Basic = (args) =>
  <div style={{position: "relative"}}>
    <Grid
      container
      spacing="sm"
      alignItems="center"
      style={{ height: '100%' }}
      {...args}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 1</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 2</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 3</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>;


export const WithRuler = (args) =>
  <div style={{position: "relative"}}>
    <GridRuler spacing="sm"></GridRuler>
    <Grid
      container
      spacing="sm"
      alignItems="center"
      style={{ height: '100%' }}
      {...args}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 1</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 2</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 3</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>;


export const Interactive = (args) =>
  <div style={{position: "relative"}}>
    <Grid
      container
      spacing="sm"
      alignItems="center"
      style={{ height: '100%' }}
      {...args}
    >
      <Grid item xs={1}>
        <Box>Box 1</Box>
      </Grid>
      <Grid item xs={1}>
        <Box>Box 2</Box>
      </Grid>
      <Grid item xs={1}>
        <Box>Box 3</Box>
      </Grid>
      <Grid item xs={1}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
</div>;
