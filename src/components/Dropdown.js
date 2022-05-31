import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Dropdown.css";
const Dropdown = ({ selected, setSelected }) => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn">
        <span className="" onClick={(e) => setIsActive(!isActive)}>
          recommended
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div
            className="dropdown-item"
            onClick={(e) => {
              dispatch({ type: "SORT_BY_PRICE", payload: "hightolow" });
              setSelected(e.target.textContent);
            }}
          >
            High to Low
          </div>

          <div
            className="dropdown-item"
            onClick={() => {
              dispatch({ type: "SORT_BY_PRICE", payload: "lowtohigh" });
            }}
          >
            Low To High
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
