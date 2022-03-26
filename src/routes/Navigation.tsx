import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import { ShoppingPage } from "../02-componets-patterns/pages/ShoppingPage";

<<<<<<< HEAD
import logo from "../logo.svg";
=======
import logo from '../logo.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
>>>>>>> 3eea1822f4901fe08a1f0e37b1cc02cd71bc1320

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
<<<<<<< HEAD
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shopping
              </NavLink>
=======
              <NavLink to="/" activeClassName="nav-active" exact>Shopping</NavLink>
>>>>>>> 3eea1822f4901fe08a1f0e37b1cc02cd71bc1320
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                // className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
<<<<<<< HEAD

        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/" element={<ShoppingPage/>} />
        </Routes>
=======
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
            <ShoppingPage />
          </Route>
        </Switch>
>>>>>>> 3eea1822f4901fe08a1f0e37b1cc02cd71bc1320
      </div>
    </Router>
  );
};
