import { createSlice } from '@reduxjs/toolkit';

const employeesSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      if(action.payload.dateOfBirth && typeof action.payload.dateOfBirth === 'object'){
        action.payload.dateOfBirth = action.payload.dateOfBirth.toISOString().split('T')[0];
        
      }
      if(action.payload.startDate && typeof action.payload.startDate === 'object'){
        action.payload.startDate = action.payload.startDate.toISOString().split('T')[0];
        
      }
      state.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
