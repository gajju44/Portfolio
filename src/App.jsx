import HomePage from './Pages/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stats from './Pages/HomePage/Stats';
import UnderDevelopment from './Pages/HomePage/UnderDevelopment';
function App() {
 
  const router = createBrowserRouter([

    
    {
      path: "/",
      element: <HomePage />,
      errorElement: <>404 page not found</>,
    },
    {
      path: "/Stats",
      element: <Stats />,
     
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
