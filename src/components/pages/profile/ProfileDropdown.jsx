import "./profile.css"
import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { logout } from "../../../services/apiFunction/authApi";

const ProfileDropdown = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  // if (!user) return null;

  // console.log("user",user.image);
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
            alt={`profile-${user?.firstName}`}
           
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
            to="/showFormData"
            className="dropdown-item"
            onClick={() => setOpen(false)}
          >
            <VscDashboard className="text-lg" />
            Dashboard
          </Link>
          <button
            className="dropdown-item"
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
          >
            <VscSignOut className="text-lg" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;


