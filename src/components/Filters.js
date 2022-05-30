import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  const { human } = useSelector((state) => state.ProductsReducer);

  const dispatch = useDispatch();

  console.log(human);
  return (
    <>
      <div className="filter-container">
        <div className="">Filters</div>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR_FILTERS" });
          }}
        >
          Clear All
        </button>

        <div className="Men_filter">
          <input
            type="radio"
            id="men"
            name="men"
            value=""
            onChange={() => dispatch({ type: "PRODUCT_FOR", payload: "men" })}
            checked={human === "men" ? true : false}
          />
            <label for="men">Men</label>
          <div>
            <input
              type="radio"
              id="women"
              name="women"
              value="women"
              onChange={() => dispatch({ type: "PRODUCT_FOR", payload: "wom" })}
              checked={human === "wom" ? true : false}
            />
              <label for="women">Women</label>
          </div>
          <div>
            <input
              type="radio"
              id="boys"
              name="boys"
              value="boys"
              onChange={() =>
                dispatch({ type: "PRODUCT_FOR", payload: "boys" })
              }
              checked={human === "boys" ? true : false}
            />
              <label for="boys">Boys</label>
          </div>
          <div>
            <input
              type="radio"
              id="girls"
              name="girls"
              value="girls"
              onChange={() =>
                dispatch({ type: "PRODUCT_FOR", payload: "girls" })
              }
              checked={human === "girls" ? true : false}
            />
              <label for="girls">Girls</label>
          </div>
        </div>

        <div className="Brand_filter">
          <div className="">Brand</div>
          <div>
            <input
              type="checkbox"
              id="Roadster"
              name="Roadster"
              value="Roadster"
              onChange={(e) =>
                dispatch({ type: "FILTER_BY_BRAND", payload: e.target.name })
              }
            />
              <label for="Roadster">Roadster</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="LouisPhilippe"
              name="LouisPhilippe"
              value=""
              onChange={(e) =>
                dispatch({ type: "FILTER_BY_BRAND", payload: e.target.name })
              }
            />
              <label for="LouisPhilippe">LouisPhilippe</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="AllenSolly"
              name="AllenSolly"
              value=""
              onChange={(e) =>
                dispatch({ type: "FILTER_BY_BRAND", payload: e.target.name })
              }
            />
              <label for="AllenSolly">AllenSolly</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="HighLander"
              name="HighLander"
              value=""
              onChange={(e) =>
                dispatch({ type: "FILTER_BY_BRAND", payload: e.target.name })
              }
            />
             <label for="HighLander">HighLander</label>
          </div>
        </div>

        <div className="Price_filter">
          <div className="">Price</div>
          <div></div>
          <input
            type="checkbox"
            id="price1"
            name="price1"
            value=""
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_PRICE",
                payload: { min: 239, max: 6429 },
              })
            }
          />
            <label for="price1">Rs. 239 to Rs. 6429</label>
          <div></div>
          <input
            type="checkbox"
            id="price2"
            name="price2"
            value=""
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_PRICE",
                payload: { min: 6429, max: 12619 },
              })
            }
          />
            <label for="price2">Rs. 6429 to Rs. 12619</label>
          <div></div>
          <input
            type="checkbox"
            id="price3"
            name="price3"
            value=""
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_PRICE",
                payload: { min: 12619, max: 18809 },
              })
            }
          />
            <label for="price3">Rs. 12619 to Rs. 18809</label>
          <div></div>
          <input
            type="checkbox"
            id="price4"
            name="price4"
            value=""
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_PRICE",
                payload: { min: 18809, max: 24999 },
              })
            }
          />
            <label for="price4">Rs. 18809 to Rs. 24999</label>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Filters;
