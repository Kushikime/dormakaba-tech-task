import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store'


// Define a type for the slice state
interface AppState {
    loading: boolean
}

// Define the initial state using that type
const initialState: AppState = {
  loading: true
}

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAppLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  },
})

export const { setAppLoading } = appSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getAppLoading = (state: RootState) => state.app.loading
export default appSlice.reducer