// import { FooterLink2 } from "../../../data/footer-links";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
// import { FaInstagram,FaRegLifeRing } from "react-icons/fa6";
// // import { FaRegLifeRing } from "react-icons/fa6";
// const Resources = [
//   "Go prol",
//   "Explore design work",
//   "Design blog",
//   "Overtime prodcast",
//   "Playoffs",
//   "Weekly Warm-Up",
//   "Refer a Friend",
//   "Code of conduct",
// ];
// const Plans = ["Post a job opening", "Post a freelance project", "Search for designers",""];
// const Community = ["Advertise with us"];

// const Footer = () => {
//   return (
//     <div className="bg-gray-100  h-screen">
//       <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent  leading-6 mx-auto relative py-14">
//         <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-gray-400">
//           {/* Section 1 */}
//           <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
//             <div className="w-[40%] flex flex-col gap-3 lg:w-[35%] mb-7 lg:pl-0 ">
//               {/* <img src={Logo} alt="" className="object-contain" /> */}
//               <h1 className="italic text-pink-500 text-[16px] text-xl   ">
//               dribbble
//               </h1>
//               <div className="flex flex-col gap-2 text-lg w-full">
                
//                 <div>Dribbble is the world's learning
//                   community for creatives to share.grow and get hired.
//                 </div>
//               </div>
//               <div className="flex gap-3 text-lg">
//                 <FaRegLifeRing/>
//                 <FaTwitter />
//                 <FaFacebook />
//                 <FaInstagram/>

//                 <FaGoogle />
//                 <FaYoutube />
//               </div>
//               <div></div>
//             </div>




//             <div className="w-[58%] lg:w-[22%] mb-7 lg:pl-0 mr-24">
//               <h1 className="text-gray-900 font-semibold text-[18px] ">
//                 For designers
//               </h1>

//               <div className="flex flex-col gap-2 mt-2">
//                 {Resources.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[15px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.split(" ").join("-").toLowerCase()}>
//                         {ele}
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </div>

//             </div>

//             <div className="w-[58%] lg:w-[20%] mb-7 lg:pl-0  mr-2">
//               <h1 className="text-gray-900 font-semibold text-[18px]">
//                 Hire designers
//               </h1>

//               <div className="flex flex-col gap-2 mt-2">
//                 {Plans.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[15px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.split(" ").join("-").toLowerCase()}>
//                         {ele}
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </div>
//               <h1 className="text-gray-900 font-semibold text-[18px] mt-7">
//                 Brands
//               </h1>
//               <div className="flex flex-col gap-2 mt-2">
//                 {Community.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[15px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.split(" ").join("-").toLowerCase()}>
//                         {ele}
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//           {/* Section 2 */}
//           <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-2">
            

           
//             {FooterLink2.map((ele, i) => {
//               return (
//                 <div key={i} className="w-[58%] lg:w-[25%] mb-7 lg:pl-0 ">
//                   <h1 className="text-gray-900 font-semibold text-[18px]">
//                     {ele.title}
//                   </h1>
//                   <div className="flex flex-col gap-2 mt-2">
//                     {ele.links.map((link, index) => {
//                       return (
//                         <div
//                           key={index}
//                           className="text-[15px] cursor-pointer hover:text-black transition-all duration-200"
//                         >
//                           <Link to={link.link}>{link.title}</Link>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               );
//             })}
            

          
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-row flex-wrap  items-center justify-between w-11/12 max-w-maxContent  mx-auto mt-24  pb-14 text-sm">

//         <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
//           <div className="flex flex-row">
//             <p className="text-lg text-black">2023 Dribbble.All rights reserved. </p>
//           </div>

//           <div className="text-center text-black">Made with ❤️ G M Faizy © 2024 Dibbble <span className="bg-pink-400 text-balance" style={{backgroundColor:"#f43f5e"}}> <FaRegLifeRing/></span></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;











import { FooterLink2 } from "../../../data/footer-links";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube, FaInstagram, FaRegLifeRing } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import '../common/footer/Footer.css'; // Ensure this path is correct

const Resources = [
  "Robatic",
  "Explore design work",
  "Design blog",
  "Overtime prodcast",
  "Playoffs",
  "Weekly Warm-Up",
  "Refer a Friend",
  "Code of conduct",
];

const Plans = ["Post a job opening", "Post a freelance project", "Search for designers", ""];
const Community = ["Advertise with us"];

const Footer = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Container className="py-14">
        <Row className="border-bottom pb-5">
          {/* Section 1 */}
          <Col lg={6} className="border-right">
            <Row className="justify-content-between">
              <Col lg={4} className="mb-7">
                <h1 className="italic text-pink-500 text-xl">DETS</h1>
                <p>University of Kalyani West Bengal Nadia.</p>
                <div className="d-flex gap-3">
                  <FaRegLifeRing className="mt-2"/>
                  <FaTwitter />
                  <FaFacebook />
                  <FaInstagram />
                  <FaGoogle />
                  <FaYoutube />
                </div>
              </Col>
              <Col lg={4} className="mb-7">
                <h2 className="text-gray-900 font-semibold">For designers</h2>
                <div className="d-flex flex-column gap-2 mt-2">
                  {Resources.map((ele, index) => (
                    <Link key={index} to={ele.split(" ").join("-").toLowerCase()} className="text-decoration-none text-dark hover-text-black">
                      {ele}
                    </Link>
                  ))}
                </div>
              </Col>
              <Col lg={4} className="mb-7">
                <h2 className="text-gray-900 font-semibold">EIE</h2>
                <div className="d-flex flex-column gap-2 mt-2">
                  {Plans.map((ele, index) => (
                    <Link key={index} to={ele.split(" ").join("-").toLowerCase()} className="text-decoration-none text-dark hover-text-black">
                      {ele}
                    </Link>
                  ))}
                </div>
                <h2 className="text-gray-900 font-semibold mt-7">Brands</h2>
                <div className="d-flex flex-column gap-2 mt-2">
                  {Community.map((ele, index) => (
                    <Link key={index} to={ele.split(" ").join("-").toLowerCase()} className="text-decoration-none text-dark hover-text-black">
                      {ele}
                    </Link>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
          {/* Section 2 */}
          <Col lg={6}>
            <Row className="justify-content-between">
              {FooterLink2.map((ele, i) => (
                <Col key={i} lg={4} className="mb-7">
                  <h2 className="text-gray-900 font-semibold">{ele.title}</h2>
                  <div className="d-flex flex-column gap-2 mt-2">
                    {ele.links.map((link, index) => (
                      <Link key={index} to={link.link} className="text-decoration-none text-dark hover-text-black">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="mt-24 pb-14 text-sm">
          <Col className="d-flex justify-content-between align-items-center">
            <p className="text-lg text-black mb-0">2023 Dribbble. All rights reserved.</p>
            <p className="text-center text-black mb-0">
              Made with ❤️ G M Faizy © 2024 Dibbble <span className="bg-pink-400 text-balance" style={{ backgroundColor: "#f43f5e" }}><FaRegLifeRing /></span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
