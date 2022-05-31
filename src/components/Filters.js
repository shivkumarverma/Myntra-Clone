import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  const { human, brand_check, price_check, brandFilter } = useSelector(
    (state) => state.ProductsReducer,
  );

  const dispatch = useDispatch();

  console.log(human);
  return (
    <>
      <div className="filter-container">
        <div className="Men_filter">
          <div className="cur">
            <input
              type="radio"
              id="men"
              name="men"
              value=""
              onChange={() => dispatch({ type: "PRODUCT_FOR", payload: "men" })}
              checked={human === "men" ? true : false}
            />
              <label for="men">Men</label>
          </div>
          <div className="cur">
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
          <div className="cur">
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
          <div className="cur">
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
          <div className="Brant_title">Brand</div>
          <div className="Brant_content">
            <div className="cur">
              <input
                type="checkbox"
                id="Roadster"
                name="Roadster"
                value="Roadster"
                onChange={(e) =>
                  dispatch({ type: "FILTER_BY_BRAND", payload: e.target.name })
                }
                checked={brandFilter === "Roadster" ? true : false}
              />
               
            </div>
            <label for="Roadster">Roadster</label>
            <div>
              <input
                type="checkbox"
                id="LouisPhilippe"
                name="LouisPhilippe"
                value=""
                onChange={(e) =>
                  dispatch({ type: "FILTER_BY_BRAND", payload: e.target.name })
                }
                checked={brandFilter === "LouisPhilippe" ? true : false}
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
                checked={brandFilter === "AllenSolly" ? true : false}
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
                checked={brandFilter === "HighLander" ? true : false}
              />
               <label for="HighLander">HighLander</label>
            </div>
          </div>
        </div>

        <div className="Price_filter">
          <div className="priceTitle">Price</div>
          <div className="Price_filter_content">
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
      </div>
    </>
  );
};

export default Filters;
