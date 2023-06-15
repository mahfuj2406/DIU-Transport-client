import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import BookTicket from "../pages/BookTicket/BookTicket";
import Schedule from "../pages/Schedule/Schedule";
import Drivers from "../pages/Drivers/Drivers";
import Gallery from "../pages/Gallery/Gallery";
import ContactUs from "../pages/ContactUs/ContactUs";
import SearchResult from "../pages/SearchResult/SearchResult";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllDrivers from "../pages/Dashboard/AllDrivers/AllDrivers";
import PrivateRoute from "./PrivateRoute";
import TodaysSchedule from "../pages/Dashboard/TodaysSchedule/TodaysSchedule";
import AllSchedule from "../pages/Dashboard/AllSchedule/AllSchedule";
import TodaysScheduleUpdate from "../pages/Dashboard/UpdatingComponents/TodaysScheduleUpdate";



  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'book-ticket',
          element:<PrivateRoute><BookTicket></BookTicket></PrivateRoute>
        },
        {
          path:'schedules',
          element: <PrivateRoute><Schedule></Schedule></PrivateRoute>,
          loader: ()=>fetch('http://localhost:5000/busInfo')
        },
        {
          path:'drivers',
          element: <Drivers></Drivers>
        },
        {
          path:'gallery',
          element: <Gallery></Gallery>
        },
        {
          path:'contact-us',
          element: <ContactUs></ContactUs>
        },
        {
          path:'busInfo/:routeName',
          element: <PrivateRoute><SearchResult></SearchResult></PrivateRoute>,
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path:'register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'all-users',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'all-drivers',
          element: <AllDrivers></AllDrivers>
        },
        {
          path: 'manage-schedule',
          element: <TodaysSchedule></TodaysSchedule>
        },
        {
          path: 'all-schedule',
          element: <AllSchedule></AllSchedule>
        },
        {
          path: 'update-todays-schedule/:id',
          element: <TodaysScheduleUpdate></TodaysScheduleUpdate>,
          loader: ({params})=>fetch(`http://localhost:5000/update-busInfo/${params.id}`)
        },
        {
          path: 'update-all-schedule',
          element: <AllSchedule></AllSchedule>
        }
      ]
    }
  ]);