
import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    pgFormData: null,
    loading: false,
}
const pgSlice =createSlice({
    name:"PgStudent",
    initialState: initialState,
    reducers:{
        setPgData(state, value) {
            state.signupData = value.payload;
          },
          setLoading(state, value) {
            state.loading = value.payload;
          },
    }
});

export const {setPgData, setLoading}=pgSlice.actions;
export default pgSlice.reducer;