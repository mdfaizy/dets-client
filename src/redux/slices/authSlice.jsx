import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  // accountType: null,
  loading: false,
  accountType: localStorage.getItem("accountType")? JSON.parse(localStorage.getItem("accountType")): null,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")): null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },

    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },

    setAccountType(state, value) {
      state.accountType = value.payload; // Update accountType along with the token
    },
  },
});

export const { setSignupData, setLoading, setToken, setAccountType } =
  authSlice.actions;

export default authSlice.reducer;
