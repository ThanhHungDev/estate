import Login from "Components/Pages/Login/Login";
import ResetPassword from "Components/Pages/Login/ResetPassword";
import BO from "Components/Pages/BO/Routers/Router";
import FO from "Components/Pages/FO/Routers/Router";
import { RoutesString, FORoutesString } from "Components/Modules/routesString";
const pages = [
  {
    path: RoutesString.Login,
    component: Login,
    exact: true,
  },
  {
    path: RoutesString.ResetPw,
    component: ResetPassword,
    exact: true,
  },
  {
    path: RoutesString.Main,
    component: BO,
    exact: true,
  },
  {
    path: FORoutesString.Main,
    component: FO,
    exact: true,
  },
];

export default pages;
