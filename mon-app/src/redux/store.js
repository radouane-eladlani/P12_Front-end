import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './reducers/employeesReducer'; 

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export default store;

