import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Paper } from '@material-ui/core';

const PokeCard = props => {
  return (
    <Grid item lg={4}>
      <Link
        to={{
          pathname: '/details',
          search: `?pokemon=${props.name}`,
          state: { id: props.id, name: props.name }
        }}
        style={{ textDecoration: 'none' }}
      >
        <Paper elevation={8} style={{ backgroundColor: '#A9A9A9' }}>
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
          >
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
              height={300}
              width={300}
              alt={props.name}
            />
            <Typography variant="h4">
              {props.name[0].toUpperCase() +
                props.name.substring(1, props.name.length)}
            </Typography>
          </Grid>
        </Paper>
      </Link>
    </Grid>
  );
};

export default PokeCard;
