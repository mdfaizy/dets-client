// // import toast from 'react-hot-toast';
// // import { setLoading ,setJobData} from "../../redux/slices/jobSlice";
// // import { apiConnector } from "../apiConnector";
// // import { Jobs } from "../apis";

// // import { useDispatch } from "react-redux";
// // const { POST_JOIN_JOB_API } = Jobs;
// // export function submitJobForm(formData) {
// //     const dispatch=useDispatch();
// //     const toastId = toast.loading("Loading...");
// //     dispatch(setLoading(true));
// //     return async (dispatch) => {
// //       try {
// //         const response = await apiConnector("POST", POST_JOIN_JOB_API, formData);
        
// //         if (!response.data.success) {
// //           throw new Error(response.data.message);
// //         }
  
// //         // Dispatch success action or handle success in reducer
// //         dispatch(setJobData(formData));
// //         toast.success("Job application submitted successfully");
// //       } catch (error) {
// //         console.error("Error submitting job form:", error);
// //         toast.error("Failed to submit job application");
// //         dispatch(setLoading(false));
// //       toast.dismiss(toastId);
// //       }
// //     };
// //   }

// import toast from 'react-hot-toast';
// import { setLoading , setJobData } from "../../redux/slices/jobSlice";
// import { apiConnector } from "../apiConnector";
// import { Jobs } from "../apis";
// const { POST_JOIN_JOB_API , DELETE_JOB_DETAIL_API} = Jobs;

// export function submitJobForm(formData,navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...");
//     dispatch(setLoading(true));

//     try {
//       const response = await apiConnector("POST", POST_JOIN_JOB_API, formData);
//       console.log("responce",response)
//     navigate('/jobsumbitdata', { state: { apidata: response}})

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       dispatch(setJobData(formData));
//       toast.success("Job application submitted successfully");
//     } catch (error) {
//       console.error("Error submitting job form:", error);
//       toast.error("Failed to submit job application");
//     } finally {
//       dispatch(setLoading(false));
//       toast.dismiss(toastId);
//     }
//   };
// }











import toast from 'react-hot-toast';
import { setLoading, setJobData } from "../../redux/slices/jobSlice";
import { apiConnector } from "../apiConnector";
import { Jobs } from "../apis";

const { POST_JOIN_JOB_API } = Jobs;

export function submitJobForm(formData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", POST_JOIN_JOB_API, formData);
      console.log("response", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setJobData(formData));
      toast.success("Job application submitted successfully");
      navigate('/jobsumbitdata', { state: { apidata: response.data } });
    } catch (error) {
      console.error("Error submitting job form:", error);
      toast.error("Failed to submit job application");
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}
