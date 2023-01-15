import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from '../data.js';
// import '../data/App.js';
const App = (props) => {
  const [index, indexSetter] = React.useState(0);
   function nextClicked = () => {
        if(index === 5){
           return;
        }
       indexSetter(index+1);
   };
   function previousClicked = () => {
        if(index === 0){
          return;
        }
     indexSetter(index-1);
   };
   function restartClicked = () => {
        indexSetter(0);
   };
   function isLastIndex(){
     return index === 5;
   }
  function isFirstIndex(){
    return index === 0;
  }
  return (
    <h1 data-testid="title"> {props.slides[index].title} </h1>
    <p data-testid="text"> {props.slides[index].text} </p>
    <button  data-testid="button-next" disabled="isLastIndex()" onClick="nextClicked()" >Next</button>
    <button data-testid="button-prev" disabled="isFirstIndex()" onClick="previousClicked()" >Prev</button>
    <button  data-testid="button-restart" onClick="restartClicked()" >Restart</button>
  )
}


export default App;
