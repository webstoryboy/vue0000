import React from 'react';
import ReactDom from 'react-dom';

// let clock = document.getElementById("clock");

// setInterval(function(){
//   clock.innerHTML = new Date().toLocaleTimeString();
// });

function clock(){
  const element = (
    <div>
      <h1>Hello, webstoryboy</h1>
      <h2>지금은 {new Date().toLocaleTimeString()}입니다.</h2>
    </div>
  )
  ReactDom.render(element, document.getElementById("root"));
}

setInterval(clock, 1000);