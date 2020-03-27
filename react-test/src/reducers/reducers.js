import { combineReducers } from 'redux';
import { productListReducer } from './productReducer';

export default combineReducers({
    products: productListReducer
});