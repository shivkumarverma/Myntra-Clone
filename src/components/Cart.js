import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsDash, BsPlus } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
const Cart = () => {
  const { products } = useSelector((state) => state.CartReducer);
  const { totalQuantities } = useSelector((state) => state.CartReducer);

  const { totalPrice } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  return (
    <div className="p_cart">
      <div className="container">
        <h3>Your Cart</h3>
        {products.length > 0 ? (
          <div className="row">
            <div className="col-9">
              <div className="cart_heading">
                <div className="col-9">
                  <div className="col-2">Picture</div>
                  <div className="col-2">Name</div>
                  <div className="col-2">Price</div>
                  <div className="col-2">Inc/dec</div>
                  <div className="">Total Price</div>
                  <div className="col-2">Remove</div>
                </div>
              </div>
            </div>
            {products.map((product) => (
              <div className="row" key={product.id}>
                <div className="col-9 bd">
                  <div className="col-2 ">
                    <div className="cart_pimg">
                      <img src={`/images/${product.image}`} alt="" />
                    </div>
                  </div>
                  <div className="col-2 ">
                    <div className="cart_pname">{product.name}</div>
                  </div>
                  <div className="col-2 ">
                    <div className="">{Math.floor(product.discountPrice)}</div>
                  </div>
                  <div className="col-2 ">
                    <span
                      className=""
                      onClick={() =>
                        dispatch({ type: "DEC", payload: product.id })
                      }
                    >
                      <BsDash />
                    </span>
                    <span className="">{product.quantity}</span>
                    <span
                      className=""
                      onClick={() =>
                        dispatch({ type: "INC", payload: product.id })
                      }
                    >
                      <BsPlus />
                    </span>
                  </div>

                  <div className="col-2">
                    <div className="">
                      {Math.floor(product.discountPrice * product.quantity)}
                    </div>
                  </div>

                  <div className="col-2">
                    <div
                      className=""
                      onClick={() =>
                        dispatch({ type: "DEL", payload: product.id })
                      }
                    >
                      <AiOutlineDelete />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-3">
              <div className="summary">
                <div className="summary_heading">Summary</div>
                <div className="summary_details">
                  <div className="row">
                    <div className="col-6 pd">Total Items: </div>
                    <div className="px pd">{totalQuantities}</div>
                  </div>
                  <div className="row">
                    <div className="col-6 pd">Total Price : </div>
                    <div className="px pd">{Math.floor(totalPrice)}</div>
                  </div>
                  <div className="checkout">
                    <button className="btn">checkOut</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          "Your cart in empty !"
        )}
      </div>
    </div>
  );
};

export default Cart;
