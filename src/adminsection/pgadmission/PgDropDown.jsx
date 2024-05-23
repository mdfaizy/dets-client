import "../../components/pages/profile/profile.css"
import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard} from "react-icons/vsc";
import { Link} from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
const PgDropDown= ({id}) => {
   const [open, setOpen] = useState(false);
   const ref = useRef(null);

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
           <img
             // src={user.image}
             src="https://api.dicebear.com/6.x/initials/svg?seed=MD"
             // alt={`profile-${user?.firstName}`}
            
             className="user_img_drop"
           />
           <AiOutlineCaretDown className="text-sm text-richblack-100" />
         </div>
       </button>
       {open && (
         <div
           className="dropdown-menu show"
           aria-labelledby="dropdownMenuButton"
           ref={ref}
         >
           <Link
             to={`/pg-data-edit/${id}`}
             className="dropdown-item"
             onClick={() => setOpen(false)}
           >
             <VscDashboard className="text-lg" />
            Update
           </Link>
           <Link
             to={`/pg-form-dataprint/${id}`}
             className="dropdown-item"
             onClick={() => setOpen(false)}
           >
             <VscDashboard className="text-lg" />
            See All
           </Link>
           <Link
             to={`/pgcource-delete/${id}`}
             className="dropdown-item"
             onClick={() => setOpen(false)}
           >
             <VscDashboard className="text-lg" />
            Delete
           </Link>
         </div>
       )}
     </div>
   );
 };

export default PgDropDown;


