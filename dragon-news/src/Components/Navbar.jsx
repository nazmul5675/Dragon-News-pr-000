
import { use } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from '../assets/user.png'
const Navbar = () => {
    const { user, logOutUser, notify } = use(AuthContext);
    const links = <>
        <li> <NavLink className={({ isActive }) => isActive ? "underline text-[#D72050] font-semibold" : '"text-gray-400 hover:text-red-400"'} to="/">Home</NavLink></li>
        <li> <NavLink className={({ isActive }) => isActive ? "underline text-[#D72050] font-semibold" : '"text-gray-400 hover:text-red-400"'} to="/about">About</NavLink></li>
        <li> <NavLink className={({ isActive }) => isActive ? "underline text-[#D72050] font-semibold" : '"text-gray-400 hover:text-red-400"'} to="/career">Career</NavLink></li>


    </>

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                notify('logOut Successfully')
            })
            .catch((error) => {
                notify(error)
            });
    }
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <div className="font-bold text-red-400">
                            {
                                user && user.email
                            }
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

                        <img className="w-10 rounded-full h-10 mr-2" src={`${user ? user.photoURL : userIcon}`} alt="" />
                        {
                            user ? <button onClick={handleLogOut} className="btn rounded-none bg-[#403F3F] text-white">Log Out</button> : <button className="btn rounded-none bg-[#403F3F] text-white"><Link to='/auth/login'>Login</Link></button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;