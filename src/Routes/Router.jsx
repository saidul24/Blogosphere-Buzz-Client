import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import AddBlog from "../Pages/AddBlog/AddBlog";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/all-blogs',
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch('http://localhost:5000/blogs')
            },
            {
                path: '/add-blog',
                element: <AddBlog></AddBlog>
            }
        ]
    },
]);

export default router;