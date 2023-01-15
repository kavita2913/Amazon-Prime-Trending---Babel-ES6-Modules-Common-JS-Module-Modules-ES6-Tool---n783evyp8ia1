import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from '../data/App.js';
const App = (props) => {
  const [index,indexSetter] = React.useState(0);
  function nextClick()= () =>{
    if(index === 5){
      return;
    }
    indexSetter(index+1);
  };
  function prevClick()= () =>{
    if(index === 0){
      return;
    }
    indexSetter(index-1);
  };
  function restartClick()= () =>{
    indexSetter(0);
  };
   function isLastIndex= () =>{
    return index === 5;
  }
  function isFirstIndex= () =>{
    return index ===0;
  }
  return (
    <h1 data-testid="title">{props.slides[index].title}</h1>
    <p data-testid="text"> {props.slides[index].text}</p>
    <button  data-testid="button-next" disabled= "isLastIndex()" onClick= "nextClick()">Next</button>
    <button data-testid="button-prev" disabled= "isFirstIndex()" onClick ="prevClick()">Prev</button>
    <button  data-testid="button-restart">Restart</button>
    
   
  )
}


export default App;
