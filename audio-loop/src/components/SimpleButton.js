import React, { Component } from 'react';


export default function Simplebutton ({text, onClick}) {

    return <button onClick={onClick} className={"top-container-menu-button text-style center-flex-text"}>
              {text}
           </button>
  }