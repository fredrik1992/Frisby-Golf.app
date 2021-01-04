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
  console.log(shortNameToUse);
  return (
    <div className="sideWindowNamesBox">
      <p className="names">{shortNameToUse}</p>
    </div>
  );
};
export default NameWindowComp;
