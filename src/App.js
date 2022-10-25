import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Courses from './components/Coureses/Courses';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FrequintlyAQ from './components/FrequintylAQ/FrequintlyAQ';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Layout from './Main/Layout';

function App() {
  const routes = createBrowserRouter([
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
        {path:"/faq", element: <FrequintlyAQ></FrequintlyAQ>},
        {path:"/blog", element: <Blogs></Blogs>},
        {path:"/login", element: <Login></Login>},
        {path:"/register", element: <Register></Register>},
      ],
    },
  ]);
  
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  );
}

export default App;
