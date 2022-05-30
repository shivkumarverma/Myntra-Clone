import React from "react";
import { BsHandbag } from "react-icons/bs";
import { BsHeart, BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Nav = () => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <div className="container">
        <div className="nav_container">
          <div className="nav_left">
            <div className="nav_logo">
              <Link to="/">
                <img src="/images/Myntra_logo.png" alt="" />
              </Link>
            </div>
            <div className="nav_link uppercase ">
              <ul className="nav_left flex">
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>HOME & LIVING</li>
                <li>BEAUTY</li>
                <li>studio</li>
              </ul>
            </div>
          </div>
          <div className="nav_right flex mx-2 item-center">
            <div className="search_bar fs-14">
              <BsSearch />
              <input
                placeholder="Search for products, brands and more"
                className="search"
                type="text"
                onChange={(e) =>
                  dispatch({ type: "SEARCH", payload: e.target.value })
                }
              />
            </div>
            <div className="icons flex mx-2 item-center">
              <div className="profile mx-2 ">
                <FaRegUser />
                <h5>Profile</h5>
              </div>
              <div className="wishlist mx-2">
                <BsHeart />
                <h5>Wishlist</h5>
              </div>

              <div className="bag mx-2">
                <Link className="bag-icon " to="/cart">
                  <BsHandbag />
                  <h5>Bag</h5>
                </Link>
                <span>{totalQuantities ? totalQuantities : 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
