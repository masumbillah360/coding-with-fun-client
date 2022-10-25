import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './components/Coureses/Courses';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
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
      ],
    },
  ]);
  
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  );
}

export default App;
