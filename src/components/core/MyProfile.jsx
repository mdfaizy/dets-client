
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import IconBtn from '../common/IconBtn/IconBtn'
// import {FiEdit} from "react-icons/fi"
// import style from "./MyProfile.module.css"

// const MyProfile = () => {

//     const {user} = useSelector((state) => state.profile)
//     const navigate = useNavigate();
//   return (
//     <div className={style.myProfile_top_section}>
//         <div className='py-10'>
//         <h1 className={style.myProfile_heading}>
//             My Profile
//         </h1>
        
//         {/* section 1 */}
//         <div className={style.myProfile_section1}>
//             <div className={style.myProfile_section1_img}>
//                 <img 
//                 src={user?.image}
//                 alt={`profile-${user?.firstName}`}
//                 style={{width:'68px',borderRadius:"50px"}}
//                 // className='aspect-square w-[78px] rounded-full object-cover' 
//               />
//                 <div className={style.myProfile_heading_name_email}>
//                     <p className={style.myProfile_section1_name_text}> {user?.firstName + " " + user?.lastName} </p>
//                     <p className=' text-[11px] md:text-sm text-richblack-300 md:max-w-full max-w-[220px] break-words'> {user?.email}</p>
//                 </div>
//             </div>
//             <div className="hidden md:block">
//             <IconBtn
//                 text="Edit"
//                 onclick={() => {
//                     navigate("/dashboard/settings")
//                 }} >
//             </IconBtn>
//             </div>
//         </div>



//         {/* section 2 */}
//         <div className='my-10 flex flex-col gap-y-3 md:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12'>
//             <div className='flex w-full items-center justify-between'>
//                 <p className='text-lg font-semibold text-richblack-5'>About</p>
//                 <div >
//                 <IconBtn 
//                 text="Edit"
//                 onclick={() => {
//                     navigate("/dashboard/settings")
//                 }} />
//                 </div>
//             </div>
//             <p className='text-richblack-400 text-sm font-medium'> {user?.additionalDetails?.about  ??  "Write Something about Yourself"}</p>
//         </div>

//         {/* section 3 */}
//         <div className='my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12'>
//             <div className='flex w-full items-center justify-between'>
//                 <p className='text-lg font-semibold text-richblack-5'>Personal Details</p>
//                 <div className=''>
//                 <IconBtn
//                 text="Edit"
//                 onclick={() => {
//                     navigate("/dashboard/settings")
//                 }} />
                
//                 </div>
//             </div>
//             <div className='flex gap-y-5 md:flex-row flex-col max-w-[500px] justify-between'>
//                 <div className='flex flex-col gap-y-5'>
//                 <div>
//                     <p className='mb-2 text-sm text-richblack-100'>First Name</p>
//                     <p className='text-sm font-medium text-richblack-5'>{user?.firstName}</p>
//                 </div>
//                 <div>
//                     <p className='mb-2 text-sm text-richblack-100'>Email</p>
//                     <p className='text-sm font-medium text-richblack-5 break-words'>{user?.email}</p>
//                 </div>
//                 <div>
//                     <p className='mb-2 text-sm text-richblack-100'>Gender</p>
//                     <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.gender ?? "Add Gender"}</p>
//                 </div>
//                 </div>


//                 <div className='flex flex-col gap-y-5'>
//                 <div>
//                     <p className='mb-2 text-sm text-richblack-100'>Last Name</p>
//                     <p className='text-sm font-medium text-richblack-5'>{user?.lastName}</p>
//                 </div>
//                 <div>
//                     <p className='mb-2 text-sm text-richblack-100'>Phone Number</p>
//                     <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
//                 </div>
//                 <div>
//                     <p className='mb-2 text-sm text-richblack-100'>Date of Birth</p>
//                     <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
//                 </div>
//             </div>
//         </div>

//       </div>
//     </div>
//     </div>
    
//   )
// }

// export default MyProfile




import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IconBtn from '../common/IconBtn/IconBtn'
// import {FiEdit} from "react-icons/fi"
import style from "./MyProfile.module.css"
import { FiEdit } from "react-icons/fi";
// import './MyProfile.css';

const MyProfile = () => {
    const { user } = useSelector((state) => state.profile);
    const navigate = useNavigate();
  
    return (
        <div className={style.profile_container}>
            <div className={style.profile_header}>
                <h1 className={style.profile_title}>My Profile</h1>

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
                <div className={`${style.section} ${style.section_md} ${style.personal_details}`}>
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
                                <p className={`${style.detail_text} ${style.break_words}`}>{user?.email}</p>
                            </div>
                            <div>
                                <p className={style.detail_title}>Gender</p>
                                <p className={style.detail_text}>{user?.additionalDetails?.gender ?? "Add Gender"}</p>
                            </div>
                        </div>
                        <div className={style.personal_detail}>
                            <div>
                                <p className={style.detail_title}>Last Name</p>
                                <p className={style.detail_text}>{user?.lastName}</p>
                            </div>
                            <div>
                                <p className={style.detail_title}>Phone Number</p>
                                <p className={style.detail_text}>{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
                            </div>
                            <div>
                                <p className={style.detail_title}>Date of Birth</p>
                                <p className={style.detail_text}>{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
