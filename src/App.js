import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Layout from './Main/Layout';

function App() {
  const routes = createBrowserRouter([
    {path: '/', element: <Layout></Layout> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {path: '/', element: <Home></Home>}
    ]}
  ])
  
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  );
}

export default App;
