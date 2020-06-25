import { configureStore, getDefaultMiddleware, } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import personsReducer from '../features/persons/personsSlice'; 
import createSagaMiddleware from 'redux-saga'; 
import rootSaga from '../sagas/rootSaga'; 
import logger from 'redux-logger'; 

const saga = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware(), 
  saga, 
  logger, 
]; 

export default (() => {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
      persons: personsReducer, 
    },
    middleware, 
  });
  saga.run(rootSaga);
  return store;
})();
