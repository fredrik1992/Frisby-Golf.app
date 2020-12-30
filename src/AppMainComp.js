import React from "react";
import { render } from "react-dom";
import NameWindowComp from "../src/MainComps/NameWindowComp"
import CourseWindowComp from "../src/MainComps/CourseWindowComp"
import BestTotalScoreComp from "./MainComps/BestTotalScoreComp"

const AppMainComp = () =>{

    return(
        <div className = "main">
            
            <div className = "nameAndCourseWindow">
                <NameWindowComp/>
                <CourseWindowComp/>
            </div>
            <BestTotalScoreComp/>

            
            
            


        </div>
    )

}
export default AppMainComp
