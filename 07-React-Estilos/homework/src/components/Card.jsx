import React from 'react';
import styles from "./Card.module.css"

export default function Card(props) {
  // acá va tu código
  return (<div className={styles.container}>
    <button onClick={props.onClose} className={styles.button}>X</button>
    <div className={styles.nameCity}>
      <h2>{props.name}</h2>
    </div>
    <div className={styles.tempLogoContainer}>
      <div>
        <p>Min</p>
        <p>{props.min}</p>
      </div>
      <div>
        <p>Max</p>
        <p>{props.max}</p>
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img-logo" />
      </div>

    </div>

  </div>)
};