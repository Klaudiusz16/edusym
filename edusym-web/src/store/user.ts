import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  id: number | null;
}

// Define the initial state using that type
const initialState: UserState = {
  id: null,
};

export const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userStore.actions;

export default userStore.reducer;
