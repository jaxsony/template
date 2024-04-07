import React, { lazy } from "react";

const Main = lazy(() => import("../components/layout/main"));
const Dashboard = lazy(() => import("../pages/dashboard"));


const protectRoutes = [
  {
    path: "",
    element: <Main />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default protectRoutes;
