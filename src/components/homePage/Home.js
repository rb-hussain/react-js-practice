import { useState } from "react";
import Cards from "../cards/Cards";
import FirstHook from "../hooks/FirstHook";
import Increment from "../increment/Increment";
import List from "../list/List";


export default function Home(){
    const [itemslist,setitems] = useState (["Hello","World"],)    
    const addItemHandle = (itemText) =>{
        setitems([...itemslist,itemText ]);
        
        // console.log(itemText);
        // InputItem.push(itemText);
        // console.log(InputItem);
        // // const InputItemArray = InputItem.map((value2, i)=>{
        //     return(
        //     InputItem.push(value2)
        //     );
        // }) 
        
    }


    return(
        <>
        <Cards />
        <FirstHook add={addItemHandle} />
        <List items={itemslist} />
        <Increment />
        </>
    );
}