import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../utils/constant";
import { useSelector } from "react-redux";
const JobDropDown = ({ id }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const user = useSelector((state) => state.profile.user);
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
                  to={`/job-data-print/${id}`}
                  className="dropdown-menu-link"
                >
                  View
                </Link>
              </li>
              <li className="dropdown-menu-item">
                {user?.accountType === ACCOUNT_TYPE.ADMIN && (
                  <Link
                    to={`/job-data-edit/${id}`}
                    className="dropdown-menu-link"
                  >
                    Edit
                  </Link>
                )}
              </li>
              <li className="dropdown-menu-item">
                <Link
                  to={`/delete-jobdata/${id}`}
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

export default JobDropDown;
