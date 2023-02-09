import { useSelector } from "react-redux";


const DisplayUser = () => {
    const data = useSelector ((state)=>{
        return state.user;
    });



    console.log(data);
    return(
        <>
     {
        data.map((user,id) => {
            console.log(<li key={id}>{ user }</li>);
            return <li key={id}>{ user }  <button > deltee</button></li>
        })
     }   
        </>    
    )};

export default DisplayUser;