import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MenuProvider } from "./Context/MenuContext.jsx";
import { ThemeProvider } from "./Context/DarkMode.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from "./Components/Dashboard/Dashboard.jsx";
import Setting from "./Components/Setting.jsx";
import Analytics from "./Components/Analytic.jsx";
import Calender from "./Components/Calender.jsx";

import Ecommerce from "./Components/Ecommerce.jsx";
import Inventory from "./Components/Inventory.jsx";
import Message from "./Components/Message.jsx";
import Report from "./Components/Report.jsx";

import Transaction from "./Components/Transactions.jsx";

import User from "./Components/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> }, // ✅ redirect
      { path: "/setting", element: <Setting /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/calender", element: <Calender /> },
      { path: "/ecommerce", element: <Ecommerce /> },
      { path: "/inventory", element: <Inventory /> },
      { path: "/report", element: <Report /> },
      { path: "/transactions", element: <Transaction /> },
      { path: "/user", element: <User /> },
      { path: "/message", element: <Message /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </MenuProvider>
  </StrictMode>
);
