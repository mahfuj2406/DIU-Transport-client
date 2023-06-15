
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
const NavBar = () => {
    // const {loading} = useAuth();
    // TODO : check admin dynamically
    // const isAdmin = true;
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    console.log("isAdmin from navbar: ", isAdmin);
    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        {
            user ? <>
            <li><Link to={'/book-ticket'}>Book Ticket</Link></li>
            <li><Link to={'/schedules'}>Todays Schedule</Link></li></> : <></>
        }
        <li><Link to={'/drivers'}>Drivers</Link></li>
        <li><Link to={'/gallery'}>Gallery</Link></li>
        <li><Link to={'/contact-us'}>Contact Us</Link></li>
    </>
    return (
        <div className="w-full ">
            <div className="container mx-auto ">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-300 z-10 rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>
                        <h1 className="normal-case font-bold border rounded p-2 text-lg md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-slate-600 to-blue-600 hover:cursor-pointer"> <Link to={'/'}>DIU Transport</Link> </h1>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <div className="dropdown dropdown-end">
                                {/* ------------------------------ ---------------------------------profile-----------------------------------------------*/}
                                <h1 tabIndex={0} className="flex items-center border py-1 px-3 rounded-md border-slate-400 text-slate-700 hover:cursor-pointer">{user.displayName}<span className="ms-2"><FaAngleDown></FaAngleDown></span></h1>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 p-2 shadow bg-blue-500 rounded w-52">
                                    {
                                        isAdmin && <li><Link to={'/dashboard'}>Dashboard</Link></li>
                                    }
                                    <li><a onClick={logOut}>Logout</a></li>
                                </ul>
                            </div> : <ul className="menu menu-horizontal px-1">
                                <li><Link to={'/login'}>Login</Link></li>
                            </ul>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;