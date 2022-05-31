import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import TopHeader from "./TopHeader";
import { BsHeart } from "react-icons/bs";
const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducer);

  const { searchQuery, human, brandFilter, minprice, maxprice, sort } =
    useSelector((state) => state.ProductsReducer);

  const transformedproduct = () => {
    let sortedproduct = products;

    console.log(searchQuery);

    if (searchQuery) {
      sortedproduct = sortedproduct.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery),
      );
    }
    if (human) {
      sortedproduct = sortedproduct.filter((p) => p.for.includes(human));
    }

    if (brandFilter) {
      sortedproduct = sortedproduct.filter((p) =>
        p.brand.toLowerCase().includes(brandFilter.toLowerCase()),
      );
    }

    if (minprice !== 0 && maxprice !== 0) {
      sortedproduct = sortedproduct.filter(
        (p) => p.discountPrice >= minprice && p.discountPrice <= maxprice,
      );
    }

    if (sort) {
      sortedproduct = sortedproduct.sort((a, b) =>
        sort === "lowtohigh"
          ? a.discountPrice - b.discountPrice
          : b.discountPrice - a.discountPrice,
      );
    }

    if (sort === "sortid") {
      sortedproduct = sortedproduct.sort((a, b) => a.id - b.id);
    }

    // console.log(sortedproduct);
    return sortedproduct;
  };
  const prod = transformedproduct();

  return (
    <div>
      <TopHeader />
      <div className="wrapper">
        <div className="filter">
          <Filters />
        </div>
        <div className="container">
          <div className="row">
            {prod.map((product) => (
              <div className="col-3" key={product.id}>
                <div className="product">
                  <div className="product_img">
                    <Link to={`/details/${product.id}`}>
                      <img
                        src={`/images/${product.image}`}
                        alt="product name"
                      />
                    </Link>
                    <div className="similar_div">
                      <button className="similar_btn">similar</button>
                      <span className="similar_s">s</span>
                    </div>
                  </div>

                  <div className="product_details">
                    <div className="p_info1">
                      <div className="product_brand">{product.brand}</div>
                      <div className="product_name">{product.name}</div>
                    </div>
                    <div className="p_info2">
                      <div className="widhlist_div">
                        {" "}
                        <button className="wishlist-btn">
                          <span className="w-heart">
                            <BsHeart />
                          </span>
                          <span className="w-text"> wishlist</span>
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="product_price">
                          Rs.{Math.round(product.discountPrice)}
                          <div className="product_discount">
                            Rs.{product.price}
                          </div>
                          <div className="discount_percent">
                            ({product.discount} % OFF)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
