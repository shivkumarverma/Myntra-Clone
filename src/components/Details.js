import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsHandbag } from "react-icons/bs";
import "./Details.css";
const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.ProductsReducer);

  // console.log(product);

  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  return (
    <div className="details_container">
      <div className="details-row">
        <div className="details-col">
          <div className="details-img-col">
            <div className="details_image">
              <img src={`/images/${product.image}`} alt="" />
            </div>
            <div className="details_image">
              <img src={`/images/${product.image}`} alt="" />
            </div>
          </div>
        </div>
        <div className="details-col">
          <div className="details_brand">{product.brand}</div>
          <span className="details_name">{product.name}</span>
          <hr />
          <div className="details_price">
            <div className="details_actual">
              Rs.{Math.floor(product.discountPrice)}
            </div>
            <span className="details_p">Rs.{Math.floor(product.price)}</span>
            <span className="details_discount">
              {" "}
              ( {product.discount}% OFF)
            </span>
          </div>
          <div className="details_info">
            <div className="detaile_size">
              <div className="details_select_size">select size</div>
              <span className="details_ac_size">38</span>
              <span className="details_ac_size">39</span>
              <span className="details_ac_size">40</span>
              <span className="details_ac_size">42</span>
            </div>
            <div className="btn_cart">
              <button
                className="btn-default"
                onClick={() =>
                  dispatch({ type: "ADD TO CART", payload: { product } })
                }
              >
                <span className="cart_icon">
                  <BsHandbag />
                </span>
                <span>Add to cart</span>
              </button>
              <button className="btn-wishlist">wishlist</button>
            </div>
          </div>

          <div className="details_pro">
            <h4>Product details</h4>
            <div className="product_desc">{product.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
