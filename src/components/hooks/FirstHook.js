import {  useState ,useRef } from "react";
import MainHeading from "../content/MainHeading";
import './FirstHook.css'

export default function FirstHook ({add}) {
    const inputRef = useRef(null);
    const test = () => {
      add(inputRef.current.value);
    }
    return(
        <>
        <MainHeading title={ "React Hooks"}/>
        <div className="container flex justify-content-center">
            <div className="row">
                <div className="col-12">
                    <input id="inputval" ref={inputRef} type="text" name="field"   />
                    <button className="btn" onClick={test}> Click</button>
                    <p id="showText"> 
                    </p>
                </div>
            </div>
        </div>
        </>
    )
};