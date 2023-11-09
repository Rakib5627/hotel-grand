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
import UpdateBook from "../Rooms/updateBook";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./ErrorPage";








const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 
      {
          path: '/rooms',
          element: <Rooms></Rooms>,
          loader:() => fetch('https://hotel-website-server-rouge.vercel.app/rooms')
      }, 
      {
          path: '/details/:id',
          element: <RoomDetails></RoomDetails>,
          loader: ({params}) => fetch(`https://hotel-website-server-rouge.vercel.app/rooms/${params.id}`),
      }, 
      {
          path: '/about',
          element: <About></About>
      }, 
      {
          path: '/book/:id',
          element:<BookHere></BookHere>,
          loader: ({params}) => fetch(`https://hotel-website-server-rouge.vercel.app/rooms/${params.id}`)

      }, 
      {
          path: '/update/:id',
          element: <UpdateBook/>,
          loader: ({params}) => fetch(`https://hotel-website-server-rouge.vercel.app/rooms/${params.id}`)

      }, 
      {
          path: '/bookings', 
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
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