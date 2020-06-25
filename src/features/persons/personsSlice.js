import { createSlice } from '@reduxjs/toolkit'; 

export const personsSlice = createSlice({
  name: 'persons', 
  initialState: {
    data: [], 
    status: 'loading', // 'loading', 'success', 'failure', 
    error: null, 
  }, 
  reducers: {
    loading: (state) => {
      state.status = 'loading'; 
      state.data = []; 
      state.error = null; 
    }, 
    success: (state, action)=> {
      state.status = 'success'; 
      state.data = action.payload; 
    }, 
    failure: (state, action) => {
      state.status = 'failure'; 
      state.error = action.payload; 
    }, 
  }, 
});

export const { 
  loading, 
  success, 
  failure, 
} = personsSlice.actions; 

export const selectPersonsState = state => state.persons; 

export default personsSlice.reducer; 