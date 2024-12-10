import HomePage from './Pages/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UnderDevelopment from './Pages/HomePage/UnderDevelopment';
function App() {
 
  const router = createBrowserRouter([

    
    {
      path: "/",
      element: <UnderDevelopment />,
      errorElement: <>404 page not found</>,
    },
 
  ]);
  return <RouterProvider router={router} />;
}

export default App
