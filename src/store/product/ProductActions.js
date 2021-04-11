export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProductToCart(product){
    return dispatch => {
        dispatch({
          type: ADD_PRODUCT,
          payload: product
        });
    };
};

export function removeProductFromCart(guid){
  return dispatch => {
      dispatch({
        type: REMOVE_PRODUCT,
        payload: guid
      });
  };
};