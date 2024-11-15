import HomePage from './Pages/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <>404 page not found</>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
