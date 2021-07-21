import React, { useContext } from "react";
import { Cart } from "../Context";
import "./styles.css";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);

  const addHandler = () => {
    setCart([...cart, prod]);
  };

  const removeHandler = () => {
    setCart(cart.filter((c) => c.id !== prod.id));
  };

  return (
    <>
      <div className="card-container">
        <img src={prod.img} alt="product-img" />
        <div className="card-description">
          <h2> {prod.name} </h2>
          <span> {prod.brand} </span>
          <span style={{ color: "green" }}> Rs.{prod.price} </span>
        </div>

        {cart.includes(prod) ? (
          <button className="remove" onClick={removeHandler}>
            Remove from Cart{" "}
          </button>
        ) : (
          <button className="add" onClick={addHandler}>
            Add to Cart{" "}
          </button>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
