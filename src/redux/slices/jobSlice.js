
import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    jobData: null,
    loading: false,
}

const jobSlice =createSlice({
    name:"job",
    initialState: initialState,
    reducers:{
        setJobData(state, value) {
            state.signupData = value.payload;
          },
          setLoading(state, value) {
            state.loading = value.payload;
          },
          deleteJobData(state, action) {
            // Remove job data with matching id
            state.jobData = state.jobData.filter(job => job.id !== action.payload);
        },
        
       
    }
});

export const {setJobData, setLoading}=jobSlice.actions;
export default jobSlice.reducer;