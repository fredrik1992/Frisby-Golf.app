import React from "react";
import { render } from "react-dom";
import { useState } from "react";
import NameWindowComp from "../src/MainComps/NameWindowComp";
import CourseWindowComp from "../src/MainComps/CourseWindowComp";
import BestTotalScoreComp from "./MainComps/BestTotalScoreComp";

const AppMainComp = () => {
  const [selectedCourseDate, setSelectedCourseDate] = useState([
    {
      laneNum: "1",
      par: "3"
    },
     {
        laneNum:"2",
        par:"4"
    },
     {
        laneNum:"3",
        par:"5"
    },
    {
        laneNum: "4",
        par: "7"
      },
       {
          laneNum:"5",
          par:"5"
      },
       {
          laneNum:"6",
          par:"8"
      }
]);
function updateState(){
    console.log("in update")
    setSelectedCourseDate(function (prevState) {
        return [...prevState];
      });
}
  
  return (
    <div className="main">
      <div className="nameAndCourseWindow">
        <NameWindowComp />
        <CourseWindowComp data = {selectedCourseDate} update = {updateState} />
      </div>
      <BestTotalScoreComp />
    </div>
  );
};
export default AppMainComp;
