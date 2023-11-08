import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../Extras/About";
import SignIn from "../SignUpIn/Login";
import SIgnUp from "../SignUpIn/SIgnUp";
import Main from "../layouts/Main";
import Rooms from "../Rooms/Rooms";
import RoomDetails from "../Rooms/RoomDetails";
import BookHere from "../Rooms/BookHere";
import Bookings from "../Rooms/Bookings";








const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 
      {
          path: '/rooms',
          element: <Rooms></Rooms>,
          loader:() => fetch('http://localhost:5000/rooms')
      }, 
      {
          path: '/details/:id',
          element: <RoomDetails></RoomDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`),
      }, 
      {
          path: '/about',
          element: <About></About>
      }, 
      {
          path: '/book/:id',
          element:<BookHere></BookHere>,
          loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)

      }, 
      {
          path: '/bookings', 
          element: <Bookings></Bookings>
      }, 
      {
          path: '/login', 
          element: <SignIn></SignIn>
      }, 
      {
          path: '/signup', 
          element: <SIgnUp></SIgnUp>
      }
    ]
  },
]);


export default router;