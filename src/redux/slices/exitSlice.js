
import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    pgFormData: null,
    loading: false,
}
const exitSlice =createSlice({
    name:"ExitStudent",
    initialState: initialState,
    reducers:{
        setExitData(state, value) {
            state.signupData = value.payload;
          },
          setLoading(state, value) {
            state.loading = value.payload;
          },
    }
});

export const {setExitData, setLoading}=exitSlice.actions;
export default exitSlice.reducer;