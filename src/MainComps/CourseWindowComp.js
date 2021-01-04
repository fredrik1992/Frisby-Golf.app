import React from "react";
import { useState } from "react";
import "./MainCompsCss/CourseWindowComp.css";
const CourseWindowComp = (props) => {
  console.log(props.courseData);

  const [laneNums, setLaneNums] = useState({
    page: 1,
  });
  const [indexToRemember, setindexToRemember] = useState({
    indexToStartAt: 0,
    indexToStopAt: 3,
    page: 1,
  });

  return (
    <div className="laneWindow">
      <div className="laneNumberWindow">
        <p className="laneNumber">{props.lane}</p>
      </div>
      <div className="courseLanes">
        <div className="lanePar">
          <p>par</p>
          <p>{props.par}</p>
        </div>
      </div>
    </div>
  );
};
export default CourseWindowComp;
