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
    <div>
      <span> My Cart 🛒 </span> <br />
      <span> Total: Rs {total} </span>
      <div className="prodcut-item">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default CartShop;
