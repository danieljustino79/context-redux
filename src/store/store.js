import {createStore, combineReducers} from 'redux';

import ProductReducer from './product/ProductReducer';

const rootReducer = combineReducers({
    product: ProductReducer
})

const store = createStore(rootReducer)

export default store;