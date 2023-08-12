import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import Signup from "./Signup";
import LookforPage from "./pages/LookforPage";
import Myreview from "./pages/Myreview";




const router = createBrowserRouter([

    {
    path:"App",
    element: <App/>,
    children : [
        {
            path:"MainPage",
            element: <MainPage/>
        },

        {
            path:"LookforPage",
            element: <LookforPage/>
        },

        {
            path:"Myreview",
            element: <Myreview/>
        },
    ],
    
    },
    {
        path:"/",
        element: <Signup/>

        },
]);

export default router;