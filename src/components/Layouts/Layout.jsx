import React, { useContext } from "react";
import { StateContext } from "../Context/StateContext";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";

const Layout = ({ children }) => {
  const [mode, setMode] = useContext(StateContext);

  return (
    <>
      <div data-theme={`${mode ? "cupcake" : ""}`}>
        <LeftSidebar />
        {children}
        <RightSidebar />
      </div>
    </>
  );
};

export default Layout;
