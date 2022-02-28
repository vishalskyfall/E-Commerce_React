export const CartReducer = (state, action) => {
  let product;
  let index;
  let updatedPrice;
  let updatedQty;
  const { shoppingCart, totalPrice, qty } = state;

  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((product) => product.id === action.id);
      // console.log("test"); above id will come from product js id:product.id via action
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }
      break;

    case "INC":
      product = action.cart;
      product.qty = product.qty + 1;
      updatedPrice = totalPrice + product.price;
      updatedQty = qty + 1;
      index = shoppingCart.findIndex((cart) => cart.id === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;

    case "DEC":
      product = action.cart;
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedPrice = totalPrice - product.price;
        updatedQty = qty - 1;
        index = shoppingCart.findIndex((cart) => cart.id === action.id);
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      } else {
        return state;
      }
      break;

    case "DELETE_PRODUCT":
      const filtered = shoppingCart.filter((product) => product.id !== action.id);
        product = action.cart;
        // setAllPrice(allPrice - product.price * product.qty);
        updatedPrice = totalPrice - product.price * product.qty;
        updatedQty = qty - product.qty;
        return {
            shoppingCart: [...filtered],
            totalPrice: updatedPrice,
            message: "",
            qty: updatedQty,
        };
      break;

    default:
      return state;
      break;
  }
};
