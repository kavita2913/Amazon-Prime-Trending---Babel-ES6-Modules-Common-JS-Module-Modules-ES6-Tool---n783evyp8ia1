import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div>
    <h1 data-testid="title">Amazon-Prime-Trending</h1>
    <p data-testid="text">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque dolor quae hic, quia necessitatibus!
    </p>
    <button  data-testid="button-next">Next</button>
    <button data-testid="button-prev">Prev</button>
    <button  data-testid="button-restart">Restart</button>
    
    </div>
  )
}


export default App;
