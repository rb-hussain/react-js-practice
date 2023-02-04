import { Link } from "react-router-dom";
import './navigation.css'; 
const Navigation = ({onLogout}) =>{
    return (
        <header>
            <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="cards">Card</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/current-time">Current Time</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/todo-beta">Todo Beta</Link>
            </li>
            <li>
              <Link to="/nothing-here">404</Link>
            </li>
          </ul>
          <button className="login-btn" onClick={ () => onLogout(false)} > LogOut </button>
        </nav>
  
        <hr />
      </div>
        </header>
    );
};

export default Navigation;