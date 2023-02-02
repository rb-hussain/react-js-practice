import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from "../header/Navigation";
import Home from '../homePage/Home';
import NotFound from "../NotFound";
import Layout from "../header/Navigation"

const MainRouter = () => {
    return (
    <>
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={ <NotFound />} />
            </Route>
      </Routes>
    </div>
    </>
    );
};



function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
  
  function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }

export default MainRouter;