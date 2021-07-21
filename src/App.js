import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CartShop from "./components/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <CartShop />
      </Route>
    </Router>
  );
}

export default App;
