import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";

const CartShop = () => {
  const [total, setTotal] = useState();

  const { cart } = useContext(Cart);

  useEffect(() => {
    setTotal(cart.reduce((acc, currVal) => acc + Number(currVal.price), 0));
  }, [cart]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}> My Cart 🛒 </span> <br />
      <span style={{ fontSize: 30 }}> Total: Rs {total} </span>
      <div className="product-item">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default CartShop;
