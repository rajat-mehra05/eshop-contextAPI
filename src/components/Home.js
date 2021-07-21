import products from "../data/products.json";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="product-item">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
