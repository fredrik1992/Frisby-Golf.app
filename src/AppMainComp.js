import React from "react";
import { render } from "react-dom";
import { useState, useEffect } from "react";
import NameWindowComp from "../src/MainComps/NameWindowComp";
import CourseWindowComp from "../src/MainComps/CourseWindowComp";
import BestTotalScoreComp from "./MainComps/BestTotalScoreComp";

const AppMainComp = () => {
  let playerNameToScore;
  const [selectedCourseDate, setSelectedCourseDate] = useState([
    {laneNum: "1", par: "3",},{laneNum: "2", par: "3",},{laneNum: "3",par: "3",},
    {laneNum: "4", par: "3",},{laneNum: "5",par: "3",},{laneNum: "6",par: "3",},
    {laneNum: "7", par: "4",},{laneNum: "8",par: "4",},{laneNum: "9",par: "3",},
    {laneNum: "10",par: "4",},{laneNum: "11",par: "3",},{laneNum: "12",par: "3",},
    {laneNum: "13",par: "3",},{laneNum: "14",par: "4",},{laneNum: "15",par: "3",},
    {laneNum: "16",par: "4",},{laneNum: "17",par: "3",},{laneNum: "18",par: "3",},
  ]);
  const [coursesToDisplay, setcoursesToDisplay] = useState([
    {laneNum: selectedCourseDate[0].laneNum,par: selectedCourseDate[0].par,},
    {laneNum: selectedCourseDate[1].laneNum,par: selectedCourseDate[1].par,},
    {laneNum: selectedCourseDate[2].laneNum,par: selectedCourseDate[2].par,},
  ]);

  const [indexToRemember, setindexToRemember] = useState({
    indexToStartAt: 0,
    indexToStopAt: 3,
    page: 1,
  });

  const [playerNames,setPlayernames] = useState([
    {player:"Fredrik"},{player:"Linus"},{player:"Sebbe"},{player:"David"},
    {player:"Emil"},{player:"Kevin"},{player:"Nicklas"},{player:"Kevin"},
    {player:"Nicklas"}
    
  ])
  const [currentScore,setCurrentScore] = useState([])
  
  function addToCurrentScore(lane,score){

    
    setCurrentScore (function(prevstate){
      return[...prevstate,{
        lane:lane,
        name:playerNameToScore,
        score:score
      }]
    })
    console.log(currentScore)
  }

  function addToCoursesToDisplay(index) {
    setcoursesToDisplay(function (prevState) {
      return [
        ...prevState,
        {
          laneNum: selectedCourseDate[index].laneNum,
          par: selectedCourseDate[index].par,
        },
      ];
    });
  }

  function playerToGiveScore (nameOfPlayer){
    
    playerNameToScore = nameOfPlayer;

  }

  function changePageForward() {

    console.log(indexToRemember.indexToStopAt) + "before if";
    
    
    if (indexToRemember.indexToStopAt  >=selectedCourseDate.length){
      console.log("in indextoremeber")
      //need to set page change to disabled
     
      document.getElementById("pageForward").style.disabled;

      
    }else{
      setcoursesToDisplay({});
      incresesIndexInDisplayedPages();
      
      let index = indexToRemember.indexToStartAt + 3;
      let indexEndHolder = indexToRemember.indexToStopAt + 3;
      for (index; index < indexEndHolder; index++) {
        addToCoursesToDisplay(index);
      }
    }
    
    
    //set a control on length of course if index to stop at is higer or equal to it you cant increse it
    
  }

  function changePageBackwards() {

    console.log(indexToRemember.indexToStopAt) + "before if";
    
    
    if (indexToRemember.indexToStopAYO  >=selectedCourseDate.length){
      console.log("in indextoremeber")
      //need to set page change to disabled
     
      document.getElementById("pageForward").style.disabled;

      
    }else{
      setcoursesToDisplay({});
      incresesIndexInDisplayedPages();
      
      let index = indexToRemember.indexToStartAt + 3;
      let indexEndHolder = indexToRemember.indexToStopAt + 3;
      for (index; index < indexEndHolder; index++) {
        addToCoursesToDisplay(index);
      }
    }
    
    
    //set a control on length of course if index to stop at is higer or equal to it you cant increse it
    
  


  

  function incresesIndexInDisplayedPages() {
    setindexToRemember(function () {
      return {
        indexToStartAt: indexToRemember.indexToStartAt + 3,
        indexToStopAt: indexToRemember.indexToStopAt + 3,
        page: indexToRemember.page++,
      };
    });
  }
function test (){
  console.log(currentScore)
  setCurrentScore(function (prevState) {
    return [
      ...prevState,
      
    ];
  });
}
  
  return (
    <div className="main">
      <button onClick = {test}>test</button>
      <div className="nameAndCourseWindow">
      <div className="sideWindowMain"> 
      <div className = "playerBox">
      {playerNames.map(function(player){
          return(
            <NameWindowComp
            playerToGiveScore ={playerToGiveScore}
            name = {player.player}></NameWindowComp>
          )
        })}

      </div>
      
      
      </div>
        
       
        <div className="courseWindow">
          <h2 className="courseName">Course</h2>
          <div className="courseLanesHolderWindow">
            {coursesToDisplay.map(function (coursesToDisplay) {
              if (coursesToDisplay != undefined) {
                return (
                  <CourseWindowComp
                    test = {test}
                    scoreData = {currentScore}
                    addToCurrentScore = {addToCurrentScore}
                    par={coursesToDisplay.par}
                    lane={coursesToDisplay.laneNum}
                  ></CourseWindowComp>
                );
              }
            })}

            <button id = "pageForward"className="nextPageButton" onClick={changePageForward}>
              change
            </button>
          </div>
        </div>
      </div>
      <BestTotalScoreComp />
    </div>
  );
};
export default AppMainComp;
