import { useState } from "react";

export default function Increment (){
    let [count,setcount] = useState (5);
    // let state = useState ();

        // const [currentcount, setcounts] = useState (0,);
        // setcounts([...currentcount,count ]);
    const increment = () => {
        setcount(++count ); 
        // console.log(count);
    }
    return (
        <>
        <div className="container">
        <h1>{count}</h1>
        <button onClick={increment}> Click Me</button>
        </div>
        </>
    );
}