import Sidebar from "../side-bar/Sidebar";
import Navbar from "./Navbar";

const Dassboars = ({ sidebartoggle, setSidebartoggle }) => {
  return (
    // <div  style={`${sidebartoggle?"margingLeft:"20px":width:"100%"}`}>
    <div style={{ marginLeft: sidebartoggle ? "" : "64px", width: "100%" }}>
      {/* <div style={{ marginLeft: sidebartoggle ? "" : "64px", width:sidebartoggle ? "100%" : "" }}> */}

      <Navbar
        setSidebartoggle={setSidebartoggle}
        sidebartoggle={sidebartoggle}
      />
    </div>
  );
};

export default Dassboars;
