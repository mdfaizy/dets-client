// // import { useSelector, useDispatch } from 'react-redux';
// // import { Link } from 'react-router-dom';
// // import { MdOutlineAttachMoney, MdOutlineBarChart, MdOutlineClose, MdOutlineCurrencyExchange, MdOutlineGridView, MdOutlineLogout, MdOutlineMessage, MdOutlinePeople, MdOutlineSettings, MdOutlineShoppingBag } from 'react-icons/md';
// // import { LIGHT_THEME } from '../../utils/constant';
// // import LogoBlue from '../../assets/Images/logo_blue.svg';
// // import LogoWhite from '../../assets/Images/logo_white.svg';
// // import './Sidebar.scss';

// // const Sidebar = () => {
// //   const theme = useSelector((state) => state.theme.theme);
// //   const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
// //   const dispatch = useDispatch();

// //   const closeSidebar = () => {
// //     dispatch({ type: 'sidebar/closeSidebar' });
// //   };
// //     const toggleSidebar = () => {
// //     dispatch({ type: isSidebarOpen ? 'sidebar/closeSidebar' : 'sidebar/openSidebar' });
// //   };

// //   return (
// //     <>
// //     <button className="sidebar-toggle-btn bar" onClick={toggleSidebar}>
// //          <MdOutlineGridView size={44} />
// //       </button>
   
// //     <nav className={`sidebar ${isSidebarOpen ? 'sidebar-show' : ''}`}>
      
      
// //       <div className="sidebar-top">
// //         <div className="sidebar-brand">
// //           <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
// //           <span className="sidebar-brand-text">tabernam.</span>
// //         </div>
// //         <button className="sidebar-close-btn" onClick={closeSidebar}>
// //           <MdOutlineClose size={24} />
// //         </button>
// //       </div>
// //       <div className="sidebar-body">
// //         <div className="sidebar-menu">
// //           <ul className="menu-list">
// //             <li className="menu-item">
// //               <Link to="/account" className="menu-link active">
// //                 <span className="menu-link-icon">
// //                   <MdOutlineGridView size={18} />
// //                 </span>
// //                 <span className="menu-link-text">Dashboard</span>
// //               </Link>
// //             </li>
// //             <li className="menu-item">
// //               <Link to="/teacher-account" className="menu-link">
// //                 <span className="menu-link-icon">
// //                   <MdOutlineBarChart size={20} />
// //                 </span>
// //                 <span className="menu-link-text">Statistics</span>
// //               </Link>
// //             </li>
// //             <li className="menu-item">
// //               <Link to="/payment" className="menu-link">
// //                 <span className="menu-link-icon">
// //                   <MdOutlineAttachMoney size={20} />
// //                 </span>
// //                 <span className="menu-link-text">Payment</span>
// //               </Link>
// //             </li>
// //             <li className="menu-item">
// //               <Link to="/transactions" className="menu-link">
// //                 <span className="menu-link-icon">
// //                   <MdOutlineCurrencyExchange size={18} />
// //                 </span>
// //                 <span className="menu-link-text">Transactions</span>
// //               </Link>
// //             </li>
// //             <li className="menu-item">
// //               <Link to="/products" className="menu-link">
// //                 <span className="menu-link-icon">
// //                   <MdOutlineShoppingBag size={20} />
// //                 </span>
// //                 <span className="menu-link-text">Products</span>
// //               </Link>
// //             </li>
// //             <li className="menu-item">
// //               <Link to="/customer" className="menu-link">
// //                 <span className="menu-link-icon">
// //                   <MdOutlinePeople size={20} />
// //                 </span>
// //                 <span className="menu-link-text">Customer</span>
// //               </Link>
// //             </li>
// //             <li className="menu-item">
// //               <Link to="/messages" className="menu-link">
// //                 <span className="menu-link-icon">
// //                   <MdOutlineMessage size={18} />
// //                 </span>
// //                 <span className="menu-link-text">Messages</span>
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>

// //         <div className="sidebar-menu sidebar-menu2">
// //           <ul className="menu-list">
// //             <li className="menu-item">
// //               <Link to="/settings" className="menu-link">
// //                 <span className="menu-link-icon">
// //                   <MdOutlineSettings size={20} />
// //                 </span>
// //                 <span className="menu-link-text">Settings</span>
// //               </Link>
// //             </li>
// //             <li className="menu-item">
// //               <Link to="/logout" className="menu-link">
// //                 <span className="menu-link-icon">
// //                   <MdOutlineLogout size={20} />
// //                 </span>
// //                 <span className="menu-link-text">Logout</span>
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>

// //     </>
// //   );
// // };

// // export default Sidebar;













import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineAttachMoney, MdOutlineBarChart, MdOutlineClose, MdOutlineCurrencyExchange, MdOutlineGridView, MdOutlineLogout, MdOutlineMessage, MdOutlinePeople, MdOutlineSettings, MdOutlineShoppingBag } from 'react-icons/md';
import { LIGHT_THEME } from '../../utils/constant';
import LogoBlue from '../../assets/Images/logo_blue.svg';
import LogoWhite from '../../assets/Images/logo_white.svg';
import './Sidebar.scss';

const Sidebar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch({ type: 'sidebar/closeSidebar' });
  };

  const toggleSidebar = () => {
    dispatch({ type: isSidebarOpen ? 'sidebar/closeSidebar' : 'sidebar/openSidebar' });
  };

  return (
    <>
      <button className="sidebar-toggle-btn bar" onClick={toggleSidebar}>
        <MdOutlineGridView size={44} />
      </button>
   
      <nav className={`sidebar ${isSidebarOpen ? 'sidebar-show' : ''}`}>
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
            <span className="sidebar-brand-text">Profile</span>
          </div>
          <button className="sidebar-close-btn" onClick={closeSidebar}>
            <MdOutlineClose size={24} />
          </button>
        </div>
        <div className="sidebar-body">
          <div className="sidebar-menu">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/dashboard/my-profile" className="menu-link active">
                  <span className="menu-link-icon">
                    <MdOutlineGridView size={18} />
                  </span>
                  <span className="menu-link-text">My Profile</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="dashboard/teacher-account" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineBarChart size={20} />
                  </span>
                  <span className="menu-link-text">Admission Data</span>
                </Link>
              </li>
              <li className="">
                <Link to="dashboard/feedback-form" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineAttachMoney size={20} />
                  </span>
                  <span className="menu-link-text">Exit Data</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="dashboard/about" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineCurrencyExchange size={18} />
                  </span>
                  <span className="menu-link-text">Pg Data</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/products" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineShoppingBag size={20} />
                  </span>
                  <span className="menu-link-text">Job Data</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/customer" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlinePeople size={20} />
                  </span>
                  <span className="menu-link-text">Feedback Form</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/messages" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineMessage size={18} />
                  </span>
                  <span className="menu-link-text">Messages</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="sidebar-menu sidebar-menu2">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/settings" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineSettings size={20} />
                  </span>
                  <span className="menu-link-text">Settings</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/logout" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineLogout size={20} />
                  </span>
                  <span className="menu-link-text">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;




// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { VscSignOut } from 'react-icons/vsc';
// import { sidebarLinks } from '../../../data/dashboard-links';
// import { logout } from '../../services/apiFunction/authApi';
// import SidebarLink from './SidebarLink';
// // import ConfirmationModal from '../../common/ConfirmationModal';
// // import { setCourse, setStep } from '../../../slices/courseSlice';

// const Sidebar = () => {
  
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [confirmationModal, setConfirmationModal] = useState(null);


//   return (
//     <div className='sidebar'>
//       <div className='sidebar-link-container'>
//         {sidebarLinks.map((link) => {
//           if (link.type ) return null;
//           return <SidebarLink key={link.id} link={link} iconName={link.icon} />;
//         })}
//       </div>

//       <div className='separator'></div>

//       <div className='sidebar-link-container'>
//         <SidebarLink link={{ name: 'Settings', path: '/dashboard/settings' }} iconName="VscSettingsGear" />

//         <button
//           onClick={() =>
//             setConfirmationModal({
//               text1: 'Are You Sure ?',
//               text2: 'You will be logged out of your Account',
//               btn1Text: 'Logout',
//               btn2Text: 'Cancel',
//               btn1Handler: () => dispatch(logout(navigate)),
//               btn2Handler: () => setConfirmationModal(null),
//             })
//           }
//           className='logout-button'
//         >
//           <div className='flex items-center gap-x-2 p-4'>
//             <VscSignOut className='logout-icon' />
//             <span>Logout</span>
//           </div>
//         </button>
//       </div>

//       {/* mobile sidebar */}
//       <div className='mobile-sidebar'>
//         <div className='sidebar-link-container'>
//           {sidebarLinks.map((link) => {
//             if (link.type ) return null;
//             return <SidebarLink key={link.id} link={link} iconName={link.icon} />;
//           })}
//           <SidebarLink link={{ name: 'Settings', path: '/dashboard/settings' }} iconName="VscSettingsGear" />
//         </div>
//       </div>

//       {/* {confirmationModal && <ConfirmationModal modalData={confirmationModal} />} */}
//     </div>
//   );
// };

// export default Sidebar;
