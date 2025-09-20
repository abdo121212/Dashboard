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
import Setting from "./Pages/Setting.jsx";
import Analytics from "./Pages/Analytic.jsx";
import Calender from "./Pages/Calender.jsx";
import Ecommerce from "./Pages/Ecommerce.jsx";
import Inventory from "./Pages/Inventory.jsx";
import Message from "./Pages/Message.jsx";
import Report from "./Pages/Report.jsx";
import Transaction from "./Pages/Transactions.jsx";
import User from "./Pages/User.jsx";

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
