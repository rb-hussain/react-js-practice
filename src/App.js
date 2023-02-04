import { useState } from "react";
import Navigation from "./components/header/Navigation";
import MainRouter from "./components/router/MainRouter";
import Login from "./components/simpleLogin/Login"
export default function App() {
 
  const [isAuth, setisAuth] = useState(false);
  
  const loginHandler = () =>{
    setisAuth (true);
  }

  const logoutHanlder = () =>{
    setisAuth (false);
  }


  return (
    <>
<div>  
    { isAuth ? <div> <Navigation onLogout={logoutHanlder} /> <MainRouter /> </div> : <Login onLogin={loginHandler} /> }
</div>
    </>
  );
};
