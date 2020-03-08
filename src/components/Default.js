import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Default = () => {
  const styles = {
    color: 'white'
  };
  return (
    <Grid container justify="center" direction="column" alignItems="center" style={styles}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h1">Error</Typography>
      <Typography variant="h2">page not found</Typography>
      <Typography variant="h3">the requested url was not found</Typography>
    </Grid>
  );
};

export default Default;
