import { ADD_PRODUCT, REMOVE_PRODUCT } from "./ProductActions";

const initialState = {
    products: [
      { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
      { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
      { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
      { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ],
    cart: [],
    cartSum: 0
  };
  
function ProductReducer(state = initialState, action){
    let updatedCart
    let cartItemNumber
    switch (action.type) {
      case ADD_PRODUCT:
        cartItemNumber = state.cart.length + 1
        updatedCart = [...state.cart]
        let product = action.payload
        product = {...product, guid: cartItemNumber}
        updatedCart.push(product)
        return {...state, cart: updatedCart, cartSum: cartItemNumber};
      case REMOVE_PRODUCT:
        cartItemNumber = state.cart.length - 1
        updatedCart = [...state.cart]
        let index = updatedCart.findIndex(
          x => x.guid === action.payload
        )
        updatedCart.splice(index, 1)
        return {...state, cart: updatedCart, cartSum: cartItemNumber};
      default:
          return state;
    }
};

export default ProductReducer;