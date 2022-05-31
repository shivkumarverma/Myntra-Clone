import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Dropdown from "./Dropdown";
const TopHeader = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState("");
  return (
    <div className="top_header">
      <div className="left-filter">
        <div className="filt">Filters</div>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR_FILTERS" });
          }}
        >
          Clear All
        </button>
      </div>
      <div className="rigth-sort">
        <Dropdown selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default TopHeader;
