import React, { Component } from 'react';
import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';

class PokeHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      loader: this.props.loader
    };
  }

  handleLoad = async () => {
    const pokemon = await this.state.loader();
    this.setState({
      pokemon
    });
  };

  componentDidMount() {
    this.handleLoad();
  }

  componentDidUpdate(pastProps) {
    if (
      JSON.stringify(pastProps.pokemon) !==
        JSON.stringify(this.props.pokemon) &&
      pastProps.pokemon.length !== 0
    ) {
      const pokemon = this.state.pokemon.concat(this.props.pokemon);
      this.setState({
        pokemon
      });
    }
  }

  render() {
    const container = this.state.pokemon.map(item => {
      return (
        <PokeCard key={item.id.toString()} id={item.id} name={item.name} />
      );
    });
    return (
      <Grid container justify="flex-start" spacing={3}>
        {container}
      </Grid>
    );
  }
}

export default PokeHolder;
