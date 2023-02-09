import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from "../header/Navigation";
import Home from '../homePage/Home';
import NotFound from "../NotFound";
import Layout from "../header/Navigation"
import About from "../about/About";
import Cards from "../cards/Cards";
import DigitalClock from "../digitalClock/DigitalClock";
import Increment from "../increment/Increment";
import Todo from "../todo/Todo";
import ReduxTodo from "../reduxTodo/ReduxTodo";
import UserTable from "../usertable/UserTable";

const MainRouter = () => {
    return (
    <>
    <div>
      
      <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About/>} />
                <Route path="cards" element={<Cards/>} />
                <Route path="current-time" element={<DigitalClock/>} />
                <Route path="counter" element={<Increment />} />
                <Route path="todo-beta" element={<Todo/>} />
                <Route path="redux-todo" element={<ReduxTodo/>} />
                <Route path="user-table" element={<UserTable/>} />
                <Route path="*" element={ <NotFound />} />
      </Routes>
    </div>
    </>
    );
};



export default MainRouter;
