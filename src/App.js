import { useContext} from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router/Router";
import {ThemeContext} from "./contexts/ThemeProvider/ThemeProvider";
function App() {
  const {dark} = useContext(ThemeContext);
  
  return (
    <div data-theme={dark && 'dark'}>
      <RouterProvider router={router}></RouterProvider>;
    </div>
  );
}

export default App;
