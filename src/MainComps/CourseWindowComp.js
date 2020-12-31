import React from "react";
import { useState } from "react";
import "./MainCompsCss/CourseWindowComp.css";
const CourseWindowComp = (props) => {
  const [laneNums, setLaneNums] = useState({
    lane1: 0,
    lane2: 1,
    lane3: 2,
  });

  let lane1 = props.data[laneNums.lane1];
  let lane2 = props.data[laneNums.lane2];
  let lane3 = props.data[laneNums.lane3];

  function changePageOfCourse() {//get previous state and adds three  to show new three 
    let laneHolderOne = laneNums.lane1;
    let laneHolderTwo = laneNums.lane2;
    let laneHolderThree = laneNums.lane3;
    laneHolderOne += 3;
    laneHolderTwo += 3;
    laneHolderThree += 3;
    setLaneNums({
      lane1: laneHolderOne,
      lane2: laneHolderTwo,
      lane3: laneHolderThree,
    });
    props.update();
  }
  return (
    <div className="courseWindow">
      <h2 className="courseName">Course</h2>
      <div className="courseLanesHolderWindow">
        <div className="laneWindow">
          <div className="laneNumberWindow">
            <p className="laneNumber">{lane1.laneNum}</p>
          </div>
          <div className="courseLanes">
            <p className="courseLanesPar">{lane1.par}</p>
            <p className="courseLanesItems">Fg:3</p>
            <p className="courseLanesItems">Kk:3</p>
            <p className="courseLanesItems">Lg:3</p>
            <p className="courseLanesItems">Sp:3</p>
          </div>
        </div>

        <div className="laneWindow">
          <div className="laneNumberWindow">
            <p className="laneNumber">{lane2.laneNum}</p>
          </div>
          <div className="courseLanes">
            <p className="courseLanesPar">{lane2.par}</p>
            <p className="courseLanesItems">Fg:3</p>
            <p className="courseLanesItems">Kk:3</p>
            <p className="courseLanesItems">Lg:3</p>
            <p className="courseLanesItems">Sp:3</p>
          </div>
        </div>
        <div className="laneWindow">
          <div className="laneNumberWindow">
            <p className="laneNumber">{lane3.laneNum}</p>
          </div>
          <div className="courseLanes">
            <p className="courseLanesPar">{lane3.par}</p>
            <p className="courseLanesItems">Fg:3</p>
            <p className="courseLanesItems">Kk:3</p>
            <p className="courseLanesItems">Lg:3</p>
            <p className="courseLanesItems">Sp:3</p>
          </div>
        </div>
      </div>
      <button className="nextPageButton" onClick={changePageOfCourse}>
        Next
      </button>
    </div>
  );
};
export default CourseWindowComp;
