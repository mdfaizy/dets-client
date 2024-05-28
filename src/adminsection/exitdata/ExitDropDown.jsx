// import "../../components/pages/profile/profile.css";
// import { useRef, useState } from "react";

// import { VscDashboard } from "react-icons/vsc";
// import { Link } from "react-router-dom";
// import useOnClickOutside from "../../hooks/useOnClickOutside";
// import { HiDotsHorizontal } from "react-icons/hi";
// const ExitDropDown = ({ id }) => {
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);

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
//           <HiDotsHorizontal size={18} />
//         </div>
//       </button>
//       {open && (
//         <div
//           className="dropdown-menu show"
//           aria-labelledby="dropdownMenuButton"
//           ref={ref}
//         >
//           <Link
//             to={`/exit-data-edit/${id}`}
//             className="dropdown-item"
//             onClick={() => setOpen(false)}
//           >
//             <VscDashboard className="text-lg" />
//             Update
//           </Link>

//           <Link
//             
//             className="dropdown-item"
//             onClick={() => setOpen(false)}
//           >
//             <VscDashboard className="text-lg" />
//             See All
//           </Link>
//           <Link
//             to={`/exit-data-delete/${id}`}
//             className="dropdown-item"
//             onClick={() => setOpen(false)}
//           >
//             <VscDashboard className="text-lg" />
//             Delete
//           </Link>

//           {/* <button
//              className="dropdown-item"
//              onClick={() => {
//                dispatch(logout(navigate));
//                setOpen(false);
//              }}
//            >
//              <VscSignOut className="text-lg" />
//              Logout
//            </button> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExitDropDown;


import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const ExitDropDown = ({ id }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleDropdown}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div className="action-dropdown-menu" ref={dropdownRef}>
            <ul className="dropdown-menu-list">
              <li className="dropdown-menu-item">
                <Link
                 to={`/exit-data-print/${id}`}
                  className="dropdown-menu-link"
                >
                  View
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link
                
                to={`/exit-data-edit/${id}`}
                  className="dropdown-menu-link"
                >
                  Edit
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link
                 to={`/exit-data-delete/${id}`}
                  className="dropdown-menu-link"
                >
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default ExitDropDown;
