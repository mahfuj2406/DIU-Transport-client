import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { BsBusFront } from "react-icons/bs";
import { RiSteeringFill } from "react-icons/ri";
import { GiSteeringWheel } from "react-icons/gi";
import { MdSchedule } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link to={'/dashboard'}> <FaHome></FaHome>Home</Link></li>
      <li><Link to={'manage-schedule'}> <FaHome></FaHome>Manage Schedule</Link></li>
      <li><Link to={'all-schedule'}> <FaHome></FaHome>All Schedule</Link></li>
      <li><Link to={'all-users'}> <FaUsers></FaUsers> All Users</Link></li>
      <li><Link to={'all-drivers'}> <GiSteeringWheel></GiSteeringWheel> View Drivers</Link></li>
      <div className="divider"></div>
      <li><Link to={'/'}> <FaHome></FaHome> DIU Transport Home</Link></li>
      <li><Link to={'/schedules'}> <MdSchedule></MdSchedule> Todays All Schedule</Link></li>
      <li><Link to={'/drivers'}> <GiSteeringWheel></GiSteeringWheel> All Driver</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;