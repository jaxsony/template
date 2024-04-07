// src/store/store.ts
import { createStore, applyMiddleware, Store } from 'redux';
import customMiddleware from './middleware/thunk'; // If you're using Redux Thunk middleware
import rootReducer from './reducers';

const middleware = [customMiddleware]; // Add more middleware if needed

const configureStore = (): Store => {
    const store: Store = createStore(rootReducer, applyMiddleware(...middleware));
    return store;
};

export default configureStore;
