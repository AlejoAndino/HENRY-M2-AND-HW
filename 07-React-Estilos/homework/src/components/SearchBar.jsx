import React from 'react';
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" className={styles.input} id="inputText" placeholder='Ciudad...' />
      <button className={styles.button} onClick={() => props.onSearch("Buscando...")}>Agregar</button>
    </div>
  )
};