import { useContext } from "react";
import AuthContexts from "../../contexts/AuthContexts";
const Login = () => {
const authctx = useContext(AuthContexts);
return(
<>
        <div className="container-fluid mt-4">
            <div className="container d-flex justify-content-center ">
                <div className="row">
                    <h1>Login Here</h1>
                    <div className="content-data">
                    <div>
                        <label >Enter Your Name</label>
                        <br />
                        <br />
                        <input type="text" placeholder="write your text" name="UserName"  />
                    </div>
                    <div>
                        <label>Enter Your Password</label>
                        <br />
                        <br />
                        <input type="password" placeholder="write your password" name="UserPassword" />
                    </div>
                    <br />
                        <button className="login-btn" onClick={() => authctx.SetAuthc(true) } > Login  </button>
                    </div>
                </div>
            </div>
        </div>
</>
    );
};

export default Login;