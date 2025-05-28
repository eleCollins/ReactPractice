import React, { useState } from "react";
import Boton from "../components/boton";

const Home = () =>{
    const [count, setCount] = useState(0);
  const suma = () => {
    setCount(count + 1);
    console.log(count);
  };

  const resta = () => {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div>
        <h1>Mi app en React {count}</h1>
        <Boton onclick={suma} texto="Suma"/>
        <Boton onclick={resta} texto="Resta"/>  
    </div>
  )
}


export default Home;