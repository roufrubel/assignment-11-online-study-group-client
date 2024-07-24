import { useContext } from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
// import auth from "../firebase/firebase.config";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // const currentUser = auth.currentUser;
  // console.log(currentUser)

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li className="md:mr-2 lg:mr-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/assignments"> Assignments</NavLink>
      </li>
    </>
  );

  const navLinks2 = (
    <>
      <li className="md:mr-2 md:ml-2 lg:mr-2 lg:ml-2">
        <NavLink to="/create">Create Assignments</NavLink>
      </li>
      <li>
        <NavLink to="/pending">Pending Assignments</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
            {user && navLinks2}
          </ul>
        </div>
        <a className="btn btn-ghost flex items-center">
          <span className="md:mr-1 lg:mr-1 md:text-xl lg:text-xl hidden md:block lg:block">
            <FaBookOpenReader />
          </span>{" "}
          <span className="uppercase md:text-lg lg:text-lg font-extrabold">
            Group Study
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
          {user && navLinks2}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar image-container"
            >
              <div className="w-10 rounded-full ">
                <img alt="Pic" src={user?.photoURL} />
                <div className="tooltip">{user?.displayName}</div>
              </div>
            </div>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn ml-2">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
