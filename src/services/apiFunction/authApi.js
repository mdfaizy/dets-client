// import { toast } from "react-hot-toast";

import { toast } from "react-toastify";
import { setLoading, setToken ,setAccountType} from "../../redux/slices/authSlice";
// import { setLoading, setToken, setUser, setIsAdmin, setTeacher } from "../../redux/slices/authSlice";
// import { resetCart } from "../../slices/cartSlice"
// import { setUser } from "../../redux/slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { SIGNUP_API, LOGIN_API, VERIFY_USER } = endpoints;

export const sendOtp = async (email, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", VERIFY_USER, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};

export const signUpFrom = (formData, navigate) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    instructorKey,
    accountType,
  } = formData; // Include accountType here
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        instructorKey,
      });

      console.log("SIGNUP API RESPONSE:", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Signup Successful");
      navigate("/LoginFrom");
    } catch (error) {
      console.error("SIGNUP API ERROR:", error);
      toast.error("Sign Up failed");
      navigate("/signupfrom");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};

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

// export function login(email, password, setIsAdmin, setTeacher, navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Logging in...");
//     try {
//       const response = await apiConnector("POST", LOGIN_API, {
//         email,
//         password,
//       });

//       if (!response.data.success) {
//         toast.error(response.data.message);
//         throw new Error(response.data.message);
//       }

//       const { user, token } = response.data;

//       // Dispatch actions
//       dispatch(setToken(token));
//       dispatch(setUser(user));

//       // Set user image
//       const userImage = response.data?.user?.image
//         ? response.data.user.image
//         : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
//       dispatch(setUser({ ...response.data.user, image: userImage }));

//       // Check if the user is an admin or instructor
//       if (user.accountType === "Admin") {
//         dispatch(setIsAdmin(true));
//       }
//       if (user.accountType === "Instructor" && user.instructorKey === "ukdets@#1234") {
//         dispatch(setTeacher(true));
//       }

//       // Save token and user to local storage
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));

//       toast.success("Login Successful");
//       navigate("/");

//     } catch (error) {
//       console.error("LOGIN API ERROR:", error);
//       toast.error("Login Failed");
//     } finally {
//       toast.dismiss(toastId); // Dismiss loading toast
//     }
//   };
// }
