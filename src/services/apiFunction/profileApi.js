import { toast } from "react-hot-toast"

import { setLoading, setUser } from "../../redux/slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { profileEndpoints } from "../apis"
import { logout } from "./authAPI"
import {settingsEndpoints} from "../apis"

const { GET_USER_DETAILS_API, GET_INSTRUCTOR_DATA_API } = profileEndpoints

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      dispatch(setUser({ ...response.data.data, image: userImage }))
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_USER_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}



export async function updateAdditionalDetails(token,additionalDetails){
  console.log("additionalDetails",additionalDetails);
  const cleanToken = token.replace(/^"|"$/g, "");
  const {firstName,lastName,dateOfBirth,gender,contactNumber,about}=additionalDetails;
  console.log("additionalDetails",additionalDetails);
  const toastId = toast.loading("Updating...");
  try {
    const response = await apiConnector("PUT", settingsEndpoints.UPDATE_PROFILE_API,{firstName,lastName,dateOfBirth,gender,contactNumber,about},
    {
        Authorization: `Bearer ${cleanToken}`,
    }
);
    console.log("UPDATE_ADDITIONAL_DETAILS_API API RESPONSE............", response)
    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    toast.success("Additional Details Updated Successfully");
    const user = JSON.parse(localStorage.getItem("user"));
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.additionalDetails.dateOfBirth = dateOfBirth  || user.additionalDetails.dateOfBirth;
    user.additionalDetails.contactNumber = contactNumber || user.additionalDetails.contactNumber;
    user.additionalDetails.about = about || user.additionalDetails.about;
    user.additionalDetails.gender=gender
    localStorage.setItem("user",JSON.stringify(user));

  } catch (error) {
    console.log("UPDATE_ADDITIONAL_DETAILS_API API ERROR............", error)
    toast.error(error.response.data.message)
  }
  toast.dismiss(toastId);
}






//deleteAccount
export async function deleteAccount(token,dispatch,navigate){
  const toastId = toast.loading("Deleting...");
  try {
    const response = await apiConnector("DELETE", settingsEndpoints.DELETE_PROFILE_API,null,{
      Authorisation: `Bearer ${token}`,
    });
    console.log("DELETE_ACCOUNT_API API RESPONSE............", response)
    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    toast.success("Account Deleted Successfully");
    dispatch(logout(navigate))
  }
  catch (error) {
    console.log("DELETE_ACCOUNT_API API ERROR............", error)
    toast.error(error.response.data.message)
  }
  toast.dismiss(toastId);
}