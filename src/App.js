import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./app/Navbar/Navbar";

// const AuthLayout = () => (
//   <>
//     <Outlet />
//   </>
// );

const HomeLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
