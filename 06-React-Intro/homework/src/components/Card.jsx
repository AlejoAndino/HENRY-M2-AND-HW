import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (<div>
    <button onClick={props.onClose}>X</button>
    <div>
      <h2>{props.name}</h2>
    </div>
    <div>
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