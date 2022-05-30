import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsHandbag } from "react-icons/bs";
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
          <div className="details_image">
            <img src={`/images/${product.image}`} alt="" />
            <img src={`/images/${product.image}`} alt="" />
          </div>
        </div>
        <div className="details-col">
          <div className="details_brand">{product.brand}</div>
          <span className="details_name">{product.name}</span>
          <hr />
          <div className="details_actual">Rs.{product.discountPrice}</div>
          <span className="details_price">Rs.{product.price}</span>
          <span className="details_discount"> ( {product.discount}% OFF)</span>

          <div className="details_info">
            <div className="detaile_size">
              <div className="details_select_size">select size</div>
              <span className="details_ac_size">m</span>
              <span className="details_ac_size">xl</span>
              <span className="details_ac_size">xxl</span>
              <span className="details_ac_size">xxxl</span>
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

          <div className="details_p">
            <h4>Product details</h4>
            <div className="product_desc">{product.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
