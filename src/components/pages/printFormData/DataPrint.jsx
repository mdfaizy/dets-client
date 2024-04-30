// import "../profile/profile.css"
// import { useRef, useState } from "react";
// // import { AiOutlineCaretDown } from "react-icons/ai";
// import { VscDashboard, VscSignOut } from "react-icons/vsc";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import useOnClickOutside from "../../../hooks/useOnClickOutside";
// // import { logout } from "../../../services/apiFunction/authApi";
// import { MdAssignmentTurnedIn } from "react-icons/md";
// const DataPrint = (props) => {
//   const{isEditing,clickedIndex}=props
//   // const { user } = useSelector((state) => state.profile);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);

//   useOnClickOutside(ref, () => setOpen(false));

  

//   // console.log("user",user.image);
//   return (
//     <div className="">
//       <button
//         className="user-image-logout"
//         type="button"
//         id="dropdownMenuButton"
//         onClick={() => setOpen(true)}
//       >
//         <div className="user-image-logout">
//           <MdAssignmentTurnedIn/>
//           {/* <AiOutlineCaretDown className="text-sm text-richblack-100" /> */}
//         </div>




//       </button>
//       {open && (
//         <div
//           className="dropdown-menu show"
//           aria-labelledby="dropdownMenuButton"
//           ref={ref}
//         >
//           <Link
//             to="/showFormData"
//             className="dropdown-item"
//             onClick={() => setOpen(false)}
//           >
//             <VscDashboard className="text-lg" />
//             Show All
//           </Link>

//           <button>

//           {isEditing &&
//                     clickedIndex === index && (
//                       <div className="">
//                         <button onClick={() => handleSave(item._id, index)}>
//                           Save
//                         </button>
//                         <button onClick={handleCancel}>Cancel</button>
//                       </div>
//                     )}
//           </button>
//           <button
//             className="dropdown-item"
//             // onClick={() => {
//             //   dispatch(logout(navigate));
//             //   setOpen(false);
//             // }}
//           >
//             <VscSignOut className="text-lg" />
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataPrint;







// import{ useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MdAssignmentTurnedIn } from "react-icons/md";
// import { VscDashboard, VscSignOut } from "react-icons/vsc";
// import useOnClickOutside from "../../../hooks/useOnClickOutside";
// import axios from "axios"; // Import axios for making HTTP requests

// const DataPrint = (props) => {
//   const { isEditing, clickedIndex, index, handleSave, handleCancel,handleEdit,handleDelete,handleDetails,item } = props; // Destructure props
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);
//   const navigate = useNavigate();

//   useOnClickOutside(ref, () => setOpen(false));

//   return (
//     <div className="">
//       <button
//         className="user-image-logout"
//         type="button"
//         id="dropdownMenuButton"
//         onClick={() => setOpen(true)}
//       >
//         <div className="user-image-logout">
//           <MdAssignmentTurnedIn />
//         </div>
//       </button>
//       {open && (
//         <div
//           className="dropdown-menu show"
//           aria-labelledby="dropdownMenuButton"
//           ref={ref}
//         >
//           <Link
//             to="/showFormData"
//             className="dropdown-item"
//             onClick={() => setOpen(false)}
//           >
//             <VscDashboard className="text-lg" />
//             Show All
//           </Link>
//           {isEditing && clickedIndex === index && ( // Check if editing is enabled and it's the correct index
//             <div className="">
//               <button onClick={() => handleSave()}>Save</button>
//               <button onClick={handleCancel}>Cancel</button>
//             </div>
//           )}
//                             {!isEditing === index && (
//                     <div className="">
//                       {!teacher && isAdmin && (
//                         <>
//                           <button onClick={() => handleEdit(index)}>
//                             Edit
//                           </button>
//                           <button onClick={() => handleDelete(item._id, index)}>
//                             Delete
//                           </button>
//                         </>
//                       )}
//                       <button onClick={() => handleDetails(item)}>
//                         Details
//                       </button>
//                     </div>
//                   )}
//           <button onClick={() => handleDetails(item)}>
//                         Details
//                       </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataPrint;
















import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import axios from "axios"; // Import axios for making HTTP requests

const DataPrint = (props) => {
  const { isEditing, clickedIndex, index, handleSave, handleCancel, handleEdit, handleDelete, handleDetails, item } = props; // Destructure props
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="">
      <button
        className="user-image-logout"
        type="button"
        id="dropdownMenuButton"
        onClick={() => setOpen(true)}
      >
        <div className="user-image-logout">
          <MdAssignmentTurnedIn />
        </div>
      </button>
      {open && (
        <div
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton"
          ref={ref}
        >
          <Link
            to="/showFormData"
            className="dropdown-item"
            onClick={() => setOpen(false)}
          >
            <VscDashboard className="text-lg" />
            Show All
          </Link>
          {isEditing=== index && ( // Check if editing is enabled and it's the correct index
            <div className="">
              <button onClick={() => handleSave()}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          )}
          {/* {!isEditing && (
            // <div className="">
            //   {!teacher && isAdmin && (
            //     <>
            //       <button onClick={() => handleEdit(index)}>Edit</button>
            //       <button onClick={() => handleDelete(item._id, index)}>Delete</button>
            //     </>
            //   )}
            // </div>
          // )} */}

<button onClick={() => handleEdit()}>Edit</button>
                  <button onClick={() => handleDelete(item._id, index)}>Delete</button>
               <button onClick={() => handleDetails(item)}>
                         Details
                       </button>
        </div>
      )}
    </div>
  );
};

export default DataPrint;
