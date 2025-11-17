import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Dashboard from "../pages/Dashboard";
import Autonomy from "../pages/Autonomy";
import EnergySaving from "../pages/EnergySaving";
import Service from "../pages/Service";
import Comfort from "../pages/Comfort";
import Profile from "../pages/Profile";
import Diagnostics from "../pages/Diagnostics";
import Telemetry from "../pages/Telemetry";
import Intertime from "../pages/Intertime";
import Settings from "../pages/Settings";

import FullScreenNotFound from "../pages/FullScreenNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <Dashboard /> },
      { path: "autonomy", element: <Autonomy /> },
      { path: "energy", element: <EnergySaving /> },
      { path: "service", element: <Service /> },
      { path: "comfort", element: <Comfort /> },
      { path: "profile", element: <Profile /> },
      { path: "diagnostics", element: <Diagnostics /> },
      { path: "telemetry", element: <Telemetry /> },
      { path: "intertime", element: <Intertime /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "*",
    element: <FullScreenNotFound />,
  },
]);

export default router;