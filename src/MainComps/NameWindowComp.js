import React from "react";
import "./MainCompsCss/NameWindowComp.css";

const NameWindowComp = () => {
  return (
    <div className="sideWindowMain">
      <div className = "playerBox">
        <div className="sideWindowNamesBox">
          <p className="names">Fg</p>
        </div>
        <div className="sideWindowNamesBox">
          <p className="names">Lg</p>
        </div>
        <div className="sideWindowNamesBox">
          <p className="names">Sp</p>
        </div>
        <div className="sideWindowNamesBox">
          <p className="names">Dr</p>
        </div>
      </div>
    </div>
  );
};
export default NameWindowComp;
