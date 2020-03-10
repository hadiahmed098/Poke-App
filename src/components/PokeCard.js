import React from 'react';
import { Component } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import StatCard from './StatCard';

class PokeCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      id: props.id,
      showstats: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({showstats: !this.state.showstats});
  }

  render() {
    if(this.state.showstats) {
      return (
        <Grid item lg={4}>
          <Paper elevation={8} style={{ backgroundColor: '#A9A9A9' }}>
            <Grid
              container
              justify="center"
              direction="column"
              alignItems="center"
            >
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`}
                height={300}
                width={300}
                alt={this.state.name}
                onClick={this.handleClick}
                style={{cursor:'pointer'}}
              />
              <Typography variant="h4">
                {this.state.name[0].toUpperCase() +
                  this.state.name.substring(1, this.state.name.length)}
              </Typography>
              <StatCard name={this.state.name} id={this.state.name} />
            </Grid>
          </Paper>
        </Grid>
    );
    } else {
      return (
        <Grid item lg={4}>
          <Paper elevation={8} style={{ backgroundColor: '#A9A9A9' }}>
            <Grid
              container
              justify="center"
              direction="column"
              alignItems="center"
            >
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`}
                height={300}
                width={300}
                alt={this.state.name}
                onClick={this.handleClick}
                style={{cursor:'pointer'}}
              />
              <Typography variant="h4">
                {this.state.name[0].toUpperCase() +
                  this.state.name.substring(1, this.state.name.length)}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
    );
    }
  }
}
  
export default PokeCard;
