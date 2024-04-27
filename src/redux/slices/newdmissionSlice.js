import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  step: 1,
  newadmission: null,
  editnesadmission: false,
  delatestudent: false,
}

const newadmissionSlice = createSlice({
  name: "newadmission",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
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
  setStep,
  setNewAdmission,
  setEditNewAdmission,
  setDelteNewAdmission,

} = newadmissionSlice.actions

export default newadmissionSlice.reducer