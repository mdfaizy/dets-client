import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../common/IconBtn/IconBtn";
// import {FiEdit} from "react-icons/fi"
import style from "./MyProfile.module.css";
// import { FiEdit } from "react-icons/fi";


const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className={style.profile_container}>
      <div className={style.profile_header}>
        <h1 className={style.profile_title}>MY PROFILE</h1>

        {/* section 1 */}
        <div className={`${style.profile_section} ${style.profile_section_md}`}>
          <div className={style.profile_details}>
            <img
              src={user?.image}
              alt={`profile-${user?.firstName}`}
              className={style.profile_image}
            />
            <div className={style.profile_info}>
              <p className={style.profile_name}>
                {user?.firstName + " " + user?.lastName}
              </p>
              <p className={`${style.profile_email} ${style.profile_email_md}`}>
                {user?.email}
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/settings");
              }}
            />
          </div>
        </div>

        {/* section 2 */}
        <div className={`${style.section} ${style.section_md}`}>
          <div className={style.section1_contant}>
            <p className={style.section_title}>About</p>
            <div>
              <IconBtn
                text="Edit"
                onclick={() => {
                  navigate("/dashboard/settings");
                }}
              />
            </div>
          </div>
          <p className={style.section_text}>
            {user?.additionalDetails?.about ?? "Write Something about Yourself"}
          </p>
        </div>

        {/* section 3 */}
        <div
          className={`${style.section} ${style.section_md} ${style.personal_details}`}
        >
          <div className={style.section3_top}>
            <p className={style.section_title}>Personal Details</p>
            <div>
              <IconBtn
                text="Edit"
                onclick={() => {
                  navigate("/dashboard/settings");
                }}
              />
            </div>
          </div>
          <div className={style.personal_details_row}>
            <div className={style.personal_detail}>
              <div>
                <p className={style.detail_title}>First Name</p>
                <p className={style.detail_text}>{user?.firstName}</p>
              </div>
              <div>
                <p className={style.detail_title}>Email</p>
                <p className={`${style.detail_text} ${style.break_words}`}>
                  {user?.email}
                </p>
              </div>
              <div>
                <p className={style.detail_title}>Gender</p>
                <p className={style.detail_text}>
                  {user?.additionalDetails?.gender ?? "Add Gender"}
                </p>
              </div>
            </div>
            <div className={style.personal_detail}>
              <div>
                <p className={style.detail_title}>Last Name</p>
                <p className={style.detail_text}>{user?.lastName}</p>
              </div>
              <div>
                <p className={style.detail_title}>Phone Number</p>
                <p className={style.detail_text}>
                  {user?.additionalDetails?.contactNumber ??
                    "Add Contact Number"}
                </p>
              </div>
              <div>
                <p className={style.detail_title}>Date of Birth</p>
                <p className={style.detail_text}>
                  {user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
