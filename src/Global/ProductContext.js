import React, {createContext, useState} from "react";
import iphone from "../asset/iphone.jpg";
import headphones from "../asset/headphones.jpg"
import microphone from "../asset/microphone.jpg"
import rings from "../asset/rings.jpg"
import shoes from "../asset/shoes.jpg"
import watch from "../asset/watch.jpg"
import perfum from "../asset/perfume.jpg"
import dslr from "../asset/dslr.jpg"
export  const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const[prods] = useState([
        {id: 1, name: 'DSLR Camera', price: 40, image: dslr, productStatus: 'hot'},
        {id: 2, name: 'Perfume', price: 200, image: perfum,productStatus: 'new'},
        {id: 3, name: 'Watch', price: 300, image: watch,productStatus: 'new'},
        {id: 4, name: 'Shoes', price: 150, image: shoes,productStatus: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: microphone,productStatus: 'hot'},
        {id: 6, name: 'Headphones', price: 500, image: headphones,productStatus: 'new'},
        {id: 7, name: 'Iphone X', price: 240, image: iphone,productStatus: 'hot'},
        {id: 8, name: 'Rings', price: 120, image: rings,productStatus: 'new'},
    ]);
  return (
   <ProductContext.Provider value={{products: [...prods]}}>
{props.children}
   </ProductContext.Provider>
  )
}

export default ProductContextProvider 