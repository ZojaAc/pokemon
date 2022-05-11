import React from 'react';

const DataContext = React.createContext({
  pokeId: 0,
  setPokeId: () => {}
});

export default DataContext;