import { useState } from "react";



const DigitalClock = () => {

    let timer = new Date().toLocaleTimeString();
    const [dispalyTime, setdisplayTime ] = useState(timer);
    
    const timerFunHandler = () => {
        timer = new Date().toLocaleTimeString();
        setdisplayTime(timer);
    }

    setInterval(timerFunHandler,1000);

    return(
        <>
        <h1 className="text-center"> Digital Clock</h1>
        <p className="text-center">{dispalyTime} </p>
        </>
    );
 }

 export default DigitalClock;