import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const NavBar = () => {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Link to="/">
        <Grid item>
          <img
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          />
        </Grid>
      </Link>
    </Grid>
  );
};

export default NavBar;
