import { useState } from "react";

const Events = () =>{
    
    const purpule = "#8e44ad"; 
    const [bg,setBg] = useState(purpule);
    
    const bgColorHandle = () => {
        let newBg = "#fd7e14";
        setBg (newBg)
        console.log("Updated Color");
    }

    return(
        <>
    <div className="container-fluid" style={{backgroundColor: bg}}>
        <div className="container">
            <div className="row">
                <h2 className="text-center">Events</h2>
                <button  onDoubleClick={bgColorHandle}> Click Me</button>
            </div>
        </div>
    </div>
        </>
    );
};

export default Events;