import { useRef, useState } from "react";

const UserDataForm = () => {
    const inputRef2 = useRef (null);
    const [inputVal,setInputVal] = useState("");
    console.log(inputVal);
    const inputTextHandler = () =>{  
        setInputVal(inputRef2.current.value);
        inputRef2.current.value="";
    } 
    return(
<>
        <div className="container-fluid mt-4">
            <div className="container d-flex justify-content-center ">
                <div className="row">
                    <div className="content-data">
                        <p>Hello {inputVal}</p>
                        <input type="text" placeholder="write your text" name="userText" ref={inputRef2} />
                        <button className="Add-content" onClick={inputTextHandler}> Add </button>
                    </div>
                </div>
            </div>
        </div>
</>
    );
};


export default UserDataForm;