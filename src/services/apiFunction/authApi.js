// import { toast } from "react-hot-toast";

import { toast } from "react-toastify";
import { setLoading, setToken ,setAccountType} from "../../redux/slices/authSlice";
// import { setLoading, setToken, setUser, setIsAdmin, setTeacher } from "../../redux/slices/authSlice";
// import { resetCart } from "../../slices/cartSlice"
// import { setUser } from "../../redux/slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { SIGNUP_API, LOGIN_API, SENDOTP_API ,RESETPASSTOKEN_API,
  RESETPASSWORD_API

} = endpoints;

// export const sendOtp = async (email, navigate) =>{
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...");
//     dispatch(setLoading(true));
//     try {
//       const response = await apiConnector("POST", SENDOTP_API, {
//         email,
//         checkUserPresent: true,
//       });
//       console.log("SENDOTP API RESPONSE............", response);

//       console.log(response.data.success);

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       toast.success("OTP Sent Successfully");
//       navigate("/verify-email");
//     } catch (error) {
//       console.log("SENDOTP API ERROR............", error);
//       toast.error("Could Not Send OTP");
//     }
//     dispatch(setLoading(false));
//     toast.dismiss(toastId);
//   };
// }

// export const signUpFrom = (formData, navigate) => {
//   const {
//     firstName,
//     lastName,
//     email,
//     password,
//     confirmPassword,
//     instructorKey,
//     accountType,
//     otp,
//   } = formData; // Include accountType here
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...");
//     dispatch(setLoading(true));
//     try {
//       const response = await apiConnector("POST", SIGNUP_API, {
//         firstName,
//         lastName,
//         email,
//         password,
//         confirmPassword,
//         accountType,
//         instructorKey,
//         otp,
//       });

//       console.log("SIGNUP API RESPONSE:", response);

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       toast.success("Signup Successful");
//       navigate("/LoginFrom");
//     } catch (error) {
//       console.error("SIGNUP API ERROR:", error);
//       toast.error("Sign Up failed");
//       navigate("/signupfrom");
//     }
//     dispatch(setLoading(false));
//     toast.dismiss(toastId);
//   };
// };






// ==========




export function sendOtp(email, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      
      console.log("SENDOTP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
      dispatch(setLoading(false));
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
      dispatch(setLoading(false));
    }
  };
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  instructorKey,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        instructorKey,
        otp,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
     
      toast.success("Signup Successful");
      navigate("/LoginFrom");
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      // navigate("/signupfrom");
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}












// export function signUpFrom(
//   firstName,
//   lastName,
//   email,
//   password,
//   confirmPassword,
//   instructorKey,
//   accountType,
//   navigate,
//   otp
// ) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...");
//     dispatch(setLoading(true));
//     try {
//       const response = await apiConnector("POST", SIGNUP_API, {
//         firstName,
//         lastName,
//         email,
//         password,
//         confirmPassword,
//         instructorKey,
//         accountType,
//         otp,
//       });
//       console.log("SIGNUP API RESPONSE:", response.data);
//       console.log(otp, firstName, lastName, email, password);

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       toast.success("Signup Successful");
//       navigate("/LoginFrom");
//     } catch (error) {
//       console.error("SIGNUP API ERROR:", error);
//       toast.error("Signup Failed");
//       // Handle navigation error here or provide a default navigation path
//       // navigate("/signupfrom");
//     }
//     dispatch(setLoading(false));
//     toast.dismiss(toastId);
//   };
// }


export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
   
    // dispatch(resetCart())
    localStorage.removeItem("token");
    localStorage.removeItem("accountType");
    toast.success("Logged Out");
    navigate("/");
  };
}

export function login(email, password, setIsAdmin,setTeacher, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Logging in...");
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });
      console.log("LOGIN API RESPONSE:", response);
      if (!response.data.success) {
        toast.error(response.data.message);
        throw new Error(response.data.message);
      }
      toast.success("Login Successful");

      // Dispatch actions based on user role
      const { user } = response.data;

      // if (import.meta.env.VITE_REACT_APP_ADMIN_TOKEN === response.data.token) {
      //    dispatch(setToken(response.data.token));
      //   dispatch(setIsAdmin(true));
      //    localStorage.setItem("token", JSON.stringify(response.data.token));
      // }
      // if (user.instructorKey === "ukdets@#1234" && user.accountType === "Instructor") {
      //   dispatch(setToken(response.data.token));
      //   // dispatch(setAccountType(response.user.accountType));
      //   localStorage.setItem("token", JSON.stringify(response.data.token));
      //   // dispatch(setTeacher(true)); // Set teacher state to true
      //   console.log("jiii",response.data.token);
      //   console.log("gfgdfgd",response.data.accountType)
      //   console.log("Logged in as an Instructor", user.accountType);
      // }



      // =======================


      if (import.meta.env.VITE_REACT_APP_ADMIN_TOKEN === response.data.token) {
        dispatch(setToken(response.data.token));
        dispatch(setIsAdmin(true));
        dispatch(setAccountType("Admin")); // Set account type as Admin
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      
      if (user.instructorKey === "ukdets@#1234" && user.accountType === "Instructor") {
        dispatch(setToken(response.data.token));
        console.log("AccountType", user.accountType);
       
        dispatch(setAccountType("Instructor")); // Set account type as Instructor
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      


      console.log(user);
      dispatch(setToken(response.data.token));
      dispatch(setAccountType(response.data.accountType));
      console.log(user.accountType);
      console.log(response.data.token);
      // dispatch(setUser(user));

      // dispatch(setToken(response.data.token));
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
      // dispatch(setUser({ ...response.data.user, image: userImage }));
      console.log("userImage", userImage);    

      
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("accountType", JSON.stringify(user.accountType));

      navigate("/");
    } catch (error) {
      console.error("LOGIN API ERROR:", error);
      toast.error("Login Failed");
    } finally {
      toast.dismiss(toastId); // Dismiss loading toast
    }
  };
}


export function resetPassword(password, confirmPassword, token,setresetComplete) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      })

      console.log("RESETPASSWORD RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Password Reset Successfully")
      setresetComplete(true)
    } catch (error) {
      console.log("RESETPASSWORD ERROR............", error)
      toast.error("Failed To Reset Password")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}
export function forgotPassword(email,setEmailSent) {
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      })

      console.log("FORGOTPASSWORD RESPONSE............", response)

      if (!response.data.success) {
        toast.error(response.data.message)
        throw new Error(response.data.message)
      }

      toast.success("Reset Email Sent");
      setEmailSent(true)
    } catch (error) {
      console.log("FORGOTPASSWORD ERROR............", error)
    }
    // toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}