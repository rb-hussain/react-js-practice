import { useState } from "react";
import Cards from "../cards/Cards";
import DigitalClock from "../digitalClock/DigitalClock";
import Events from "../events/Events";
import UserDataForm from "../forms/UserDataForm";
import UserDataFormEvent from "../forms/UserDataFormEvent";
import Timer from "../getTime/Timer";
import FirstHook from "../hooks/FirstHook";
import Increment from "../increment/Increment";
import List from "../list/List";
import MainRouter from "../router/MainRouter";
import Login from "../simpleLogin/Login";
import SingleTodo from "../todo/SingleTodo";
import Todo from "../todo/Todo";


export default function Home(){
    const [itemslist,setitems] = useState (["Hello","World"],)    
      
    const addItemHandle = (itemText) =>{
            setitems([...itemslist,itemText ]);
        }


    return(
        <>
        <Cards />
        <FirstHook add={addItemHandle} />
        <List items={itemslist} />
        <Increment />
        <Todo />
        {/* <SingleTodo /> */}
        <Timer />
        <DigitalClock />
        <Events />
        <UserDataForm />
        <UserDataFormEvent />
        <Login />
        </>
    );
}