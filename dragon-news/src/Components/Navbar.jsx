import { IoPersonCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router";

const Navbar = () => {

    const links = <>
        <li> <NavLink className={({ isActive }) => isActive ? "underline text-[#D72050] font-semibold" : '"text-gray-400 hover:text-red-400"'} to="/">Home</NavLink></li>
        <li> <NavLink className={({ isActive }) => isActive ? "underline text-[#D72050] font-semibold" : '"text-gray-400 hover:text-red-400"'} to="/about">About</NavLink></li>
        <li> <NavLink className={({ isActive }) => isActive ? "underline text-[#D72050] font-semibold" : '"text-gray-400 hover:text-red-400"'} to="/career">Career</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center">
                        <a className="text-4xl"><IoPersonCircleSharp /></a>
                        <button className="btn rounded-none bg-[#403F3F] text-white">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;