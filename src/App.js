import { useContext, useEffect, useState } from "react";
import AuthHandler from "./components/authHandler/AuthHandler";
import AuthContext from "./contexts/AuthContexts";
import AuthContexts from "./contexts/AuthContexts"
export default function App() {
  useEffect(
    () => {
      const IsLogedIn = localStorage.getItem("IsLogedIn") === "1";
      setisAuth (IsLogedIn);
      console.log("I'm working");
      
    },[]
 );
  const [isAuth, setisAuth] = useState(false);
   useContext(AuthContexts);
 
  const ctxValue ={
    IsLoggedIn : isAuth,
    SetAuthc : (val) =>{
      setisAuth (val);
      localStorage.setItem ("IsLogedIn", val ? "1" : "0" );
      
    }
  } 

  
  return (
    <>
<div>  
  <AuthContext.Provider value={ctxValue}>
   <AuthHandler />
  </AuthContext.Provider>
</div>
    </>
  );
};
