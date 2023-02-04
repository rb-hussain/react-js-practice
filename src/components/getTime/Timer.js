import { useState } from "react";

const Timer = () => {
    const timer = new Date().toLocaleTimeString();
    const [showTime, setTime ]= useState(timer);
    
    const updateTimer = () => {
       let showTime =new Date().toLocaleTimeString();
        setTime(showTime);
    }
return(
        <>
    <div className="container-fluid bg-light">
        <div className="container d-flex justify-content-center">
            <div className="row ">
                <div className="dateParent ">
                    <h1> On Click Time Update</h1>
                    <p className="showDate"> {showTime} </p>
                    <button className="getTime" onClick={updateTimer}> GET TIME</button>
                </div>
            </div>
        </div>
    </div>
        </>
    );


};

export default Timer;