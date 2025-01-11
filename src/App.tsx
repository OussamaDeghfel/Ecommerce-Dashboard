import { BrowserRouter, Routes } from "react-router";
import SideNavbar from "./components/sideNavBar";
// import Dashboard from "./pages/home/dashboard"

import { Route } from "react-router";
import Dashboard from "./pages/home/dashboard";
import Finances from "./pages/finances/finances";
import Customers from "./pages/customers/customers";

import Analytics from "./pages/analytics/analytics";

function App() {
  const routesPages = [
    {
      key: 1,
      path: "/",
      element: <Dashboard />,
    },
    {
      key: 2,
      path: "/finance",
      element: <Finances />,
    },
    {
      key: 3,
      path: "/customers",
      element: <Customers />,
    },
    {
      key: 4,
      path: "/analytics",
      element: <Analytics />,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <SideNavbar />
          <div className="w-full h-screen ">
            <Routes>
              {routesPages.map((page) => (
                <Route key={page.key} path={page.path} element={page.element} />
              ))}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
