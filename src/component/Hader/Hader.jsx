import { NavLink } from "react-router-dom";

const Hader = () => {
const links=<>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/jobs'>Jobs</NavLink></li>
<li><NavLink to='/applied'>Applied Jobs</NavLink></li>
<li><NavLink to='/statistics'>Statistics</NavLink></li>
<li><NavLink to='/blogs'>Blogs</NavLink></li>

</>


  return (
    <div>
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
              {links}
              
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         
               {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#00935f] text-white hover:text-black">Star Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Hader;
