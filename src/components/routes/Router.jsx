import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../Extras/About";
import SignIn from "../SignUpIn/SignIn";
import SIgnUp from "../SignUpIn/SIgnUp";
import Main from "../layouts/Main";




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
          path: '/about',
          element: <About></About>
      }, 
      {
          path: 'login', 
          element: <SignIn></SignIn>
      }, 
      {
          path: 'signup', 
          element: <SIgnUp></SIgnUp>
      }
    ]
  },
]);


export default router;