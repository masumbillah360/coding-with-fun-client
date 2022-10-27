import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Blogs from "../../components/Blogs/Blogs";
import Courses from "../../components/Coureses/Courses";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import FrequintlyAQ from "../../components/FrequintylAQ/FrequintlyAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import PrimiumServices from "../../components/PrimiumServices/PrimiumServices";
import Profile from "../../components/Profile/Profile";
import Register from "../../components/Register/Register";
import Layout from "../../Main/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/courses",
        loader: () => fetch("https://fun-coding-server.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) => fetch(`https://fun-coding-server.vercel.app/courses/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      { path: "/faq", element: <FrequintlyAQ></FrequintlyAQ> },
      { path: "/blog", element: <Blogs></Blogs> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/profile", element: <Profile></Profile> },
      { path: "/about", element: <About></About> },
      {
        path: "/premium/:courseId",
        loader: ({ params }) => fetch(
            `https://fun-coding-server.vercel.app/courses/${params.courseId}`
          ),
        element: (
          <PrivateRoute>
            <PrimiumServices></PrimiumServices>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
