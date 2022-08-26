import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">parkeradmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>

          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <BarChartOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => {
            dispatch({ type: "LIGHT" });
          }}
        ></div>
        <div
          className="colorOptions"
          onClick={() => {
            dispatch({ type: "DARK" });
          }}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
