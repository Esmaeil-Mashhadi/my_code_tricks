import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ordered: []
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        ordered: [...state.ordered, action.payload] // Add the payload to the ordered array
      };
    }
  }
});

export default testSlice.reducer;
export const { add } = testSlice.actions;