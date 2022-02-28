import "./App.css";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductContextProvider from "./Global/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Notfound from "./components/Notfound";
import CartContextProvider from "./Global/cartContext";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
        <Router>
          <Navbar />
          
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*"  element={<Notfound />} />
          </Routes>
        </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
