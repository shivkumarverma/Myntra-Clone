import React from "react";
import { useDispatch } from "react-redux";
const TopHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="top_header">
      <ul>
        <li
          onClick={() => {
            dispatch({ type: "SORT_ID", payload: "sortid" });
          }}
        >
          Relevence
        </li>
        <li
          onClick={() => {
            dispatch({ type: "SORT_BY_PRICE", payload: "hightolow" });
          }}
        >
          High to Low
        </li>
        <li
          onClick={() => {
            dispatch({ type: "SORT_BY_PRICE", payload: "lowtohigh" });
          }}
        >
          Low To High
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
