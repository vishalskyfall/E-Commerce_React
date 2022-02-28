import React, { useContext } from "react";
import { ProductContext } from "../Global/ProductContext";
import Banner from "./Banner";
import { cartContext } from "../Global/cartContext";

const Products = () => {
  const { products } = useContext(ProductContext);
  const {dispatch} = useContext(cartContext);
  return (
      <div className="container">
          <Banner /> 
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found" />
            </div>
            <div className="productDetails">
              <div className="proName">
                <h4>{product.name}</h4>
              </div>
              <div className="proPrice">${product.price}.00</div>
            </div>
          </div>

          <div className="add-to-cart" onClick={()=>dispatch({
            type:'ADD_TO_CART',id:product.id,product
          })}>Add To Cart</div>
          {product.productStatus === "hot" ? <div className="hot">Hot</div> : ""}
          {product.productStatus === "new" ? <div className="new">New</div> : ""}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;
