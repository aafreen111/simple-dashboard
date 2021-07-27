import Dashboard from "views/examples/Dashboard.js";
import Profile from "views/examples/Profile.js";
import Login from "views/examples/Login.js";
import Settings from "views/examples/Settings.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "ni ni-settings-gear-65 text-gray",
    component: Settings,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
