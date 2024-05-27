import "./BaseLayout.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
const BaseLayout = () => {
  return (
    <div className="base-layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
