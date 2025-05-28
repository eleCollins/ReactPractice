import React from "react";

const Boton = ({ texto, onclick }) => { //las {llaves} siguen siendo igual a props
  return <button onClick={onclick}>{texto}</button>;
}

export default Boton;
