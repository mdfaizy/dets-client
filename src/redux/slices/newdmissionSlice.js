import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  newadmissionData: null,
  loading: false,
}

const newadmissionSlice = createSlice({
  name: "newadmission",
  initialState,
  reducers: {
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setNewAdmission: (state, action) => {
      state.course = action.payload
    },
    setEditNewAdmission: (state, action) => {
      state.editCourse = action.payload
    },
    setDelteNewAdmission: (state, action) => {
      state.paymentLoading = action.payload
    },
    
  },
})

export const {
  setLoading,
  setNewAdmission,
  setEditNewAdmission,
  setDelteNewAdmission,

} = newadmissionSlice.actions

export default newadmissionSlice.reducer