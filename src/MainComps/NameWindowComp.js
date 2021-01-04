import React, { useState } from "react";
import "./MainCompsCss/NameWindowComp.css";

const NameWindowComp = (props) => {
  let shortNameToUse;
  shortenName();
  
  function shortenName() {
    let nameArray = props.name.split("");
    let firstLetter = nameArray[0];
    let lastLetter = nameArray.pop();

    shortNameToUse = firstLetter + lastLetter;
  }
  function sendNameToScore (){
    console.log("in send name")
    props.playerToGiveScore(shortNameToUse)
  }
  
  return (
    <button onClick ={sendNameToScore} className="sideWindowNamesBox">
      <p className="names">{shortNameToUse}</p>
    </button>
  );
};
export default NameWindowComp;
