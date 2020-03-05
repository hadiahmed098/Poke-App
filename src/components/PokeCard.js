import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

const PokeCard = props => {
  return (
    <Grid item lg={4} style={{cursor: 'pointer'}}>
      <Paper elevation={8} style={{backgroundColor: '#1F1B24'}}>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
          height={300}
          width={300}
          alt={`${props.name}`}
        />

        <Typography variant="h4" style={{color: 'white'}}>
          {props.name[0].toUpperCase() +
            props.name.substring(1, props.name.length)}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default PokeCard;
