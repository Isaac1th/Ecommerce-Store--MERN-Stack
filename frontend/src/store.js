import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productListReducers from './reducers/productReducers';

const reducers = combineReducers({
  productList: productListReducers,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
