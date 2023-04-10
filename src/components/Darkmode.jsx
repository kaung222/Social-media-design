import React, { useContext } from "react";
import { StateContext } from "./Context/StateContext";

const Darkmode = () => {
  const [mode, setMode] = useContext(StateContext);
  return (
    <div>
      <div
        className=" flex items-center justify-between w-full gap-20 cursor-pointer"
        onClick={() => setMode(!mode)}
      >
        <p>Dark Mode</p>
        <input
          type="checkbox"
          className="toggle"
          checked={mode}
          onChange={() => console.log("light and dark")}
        />
      </div>
    </div>
  );
};

export default Darkmode;
