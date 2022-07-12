import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" id="inputText" placeholder='Ciudad...' />
      <button onClick={() => props.onSearch("Buscando...")}>Agregar</button>
    </div>
  )
};