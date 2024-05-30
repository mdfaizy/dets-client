import "./Sidebar.scss";
import SidebarLink from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="base-layout">
      <SidebarLink />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
