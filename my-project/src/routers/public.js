import Login from "../pages/login/index";
import Home from "../pages/home/index";

const publicRouters = [
  {
    Element: <Home />,
    path: "/",
    key: "home",
  },
  {
    Element: <Login />,
    path: "/login",
    key: "login",
  },
];

export default publicRouters;
