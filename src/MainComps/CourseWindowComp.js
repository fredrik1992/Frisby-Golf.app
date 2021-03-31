import React from "react";
import { useState } from "react";
import "./MainCompsCss/CourseWindowComp.css";
const CourseWindowComp = (props) => {
 let score;
 let name = "fg"
 

  const [showPointWindow, setshowPointWindow] = useState([
    {show: false,},
  ]);
  const [nameOfPlayer, setNameOfPlayer] = useState([
    
  ]);
  function sendDataToScore() {
    setshowPointWindow([{show: true,},]);
    Score();
  }
  
  function setScoreFromChoice(scoreNum) {
    
    props.addToCurrentScore(props.lane, scoreNum);
    closeScore();

  }

  function Score() {
    

    if (showPointWindow[0].show == false) {
      return <div></div>;
    } else {
      
      return (
        <div className="pointAsignerWindow">
          <button classname="pontAsignerItems" onClick={() => setScoreFromChoice(1)}>
            1
          </button>
          <button classname="pontAsignerItems" onClick={() => setScoreFromChoice(2)}>
            2
          </button>
          <button classname="pontAsignerItems" onClick={() => setScoreFromChoice(3)}>
            3
          </button>
          <button classname="pontAsignerItems" onClick={() => setScoreFromChoice(4)}>
            4
          </button>
          <button classname="pontAsignerItems" onClick={() => setScoreFromChoice(5)}>
            5
          </button>
          <button classname="pontAsignerItems" onClick={() => setScoreFromChoice(6)}>
            6
          </button>
          <button classname="pontAsignerItems" onClick={() => setScoreFromChoice(7)}>
            7
          </button>
          <button classname="pontAsignerItems" onClick={() => setScoreFromChoice(8)}>
            8
          </button>
          <button classname="pontAsignerItems" onClick={() => setScoreFromChoice(9)}>
            9
          </button>
          <button onClick={closeScore}>x</button>
        </div>
      );
    }
  }
  function closeScore() {
    setshowPointWindow([
      {
        show: false,
      },
    ]);
    Score();
  }
  function changeExistingScore (){
    console.log(props.scoreData)
    props.scoreData.map(function(savedScores){
      if (savedScores.name == name){
        console.log(props.scoreData)
        console.log("in if")
        savedScores.score = 4;
      }
      console.log(props.scoreData)
    })
    props.test()
    score  = 4
  }
  

  return (
    <div className="laneWindow">
      <Score>hallo</Score>
      <button onClick={sendDataToScore} className="laneNumberWindow">
        <p className="laneNumber">{props.lane}</p>
      </button>
      <div className="courseLanes">
        <div className="lanePar">
          <p>par</p>
          <p>{props.par}</p>
        </div>
        {props.scoreData.map(function (scoreData) {
          if (scoreData.lane == props.lane) {
            console.log(scoreData.score)
            score = scoreData.score
            
            return (
              <button onClick = {changeExistingScore} className="courseLanesItems">
                {scoreData.name}:{scoreData.score}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};
export default CourseWindowComp;
