import { useState, useEffect } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SIgnupPage from "./pages/SIgnupPage";
import "./index.css";
import DepartmentPage from "./features/department/DepartmentPage";
import EmployeePage from "./features/employee/EmployeePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SIgnupPage></SIgnupPage>,
  },
  {
    path: "/department",
    element: <DepartmentPage></DepartmentPage>,
  },
  {
    path: "/employee",
    element: <EmployeePage></EmployeePage>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
