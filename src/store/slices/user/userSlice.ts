import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UserState {
  authorized: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  authorized: false,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAuthorized: (state, action: PayloadAction<boolean>) => {
      state.authorized = action.payload;
    },
  },
});

export const { setAuthorized } = userSlice.actions;
export default userSlice.reducer;
