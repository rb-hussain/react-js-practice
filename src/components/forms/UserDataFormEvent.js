import { useState } from "react";

    const UserDataFormEvent = () => {


    const [eveChange,seteveChange] = useState("");
     const [fulltext, setfulltext] = useState();

    const eveInpute = (event) => {
        seteveChange(event.target.value);
    };    

    const fulltextfun = () =>{
        setfulltext(eveChange);
    }

return(
<>
        <div className="container-fluid mt-4">
            <div className="container d-flex justify-content-center ">
                <div className="row">
                <h1>User Data Event</h1>
                    <div className="content-data">
                        <p>Hello {fulltext}</p>
                        <input type="text" placeholder="write your text" name="userText" onChange={eveInpute}/>
                        <button className="Add-content" onClick={fulltextfun}>Add </button>
                    </div>
                </div>
            </div>
        </div>
</>
    );
};

export default UserDataFormEvent;