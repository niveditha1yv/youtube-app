// import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  );
};

export default Body;
