import { useContext } from "react";
import AuthContexts from "../../contexts/AuthContexts";
import Navigation from "../header/Navigation";
import MainRouter from "../router/MainRouter";
import Login from "../simpleLogin/Login";

const AuthHandler = () => {
 const ctxdata = useContext(AuthContexts);
    return (
    <>
     { ctxdata.IsLoggedIn ? <div> <Navigation  /> <MainRouter /> </div> : <Login /> }
    </>

    );
};

export default AuthHandler;