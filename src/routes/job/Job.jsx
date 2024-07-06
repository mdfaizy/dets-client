// import { useForm } from "react-hook-form";
// import { Container, Row, Col, Form, Accordion } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { submitJobForm } from "../../services/apiFunction/job";

// const Job = () => {
//   const navigate = useNavigate();
//   const { token } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       token: token,
//       fullName: "",
//       companies_name: "",
//       email: "",
//       date_of_birth: "",
//       phone_no: "",
//       father_Name: "",
//       gender: "",
//       Category: "",
//       home_city: "",
//       companies_city: "",
//       package_lpa: "",
//       job_role: "",
//       selectType: "",
//       totalApplyCompanies: "",
//       noOfSelectInterview: "",
//       companiesType: "",
//     },
//   });

//   const submitHandler = (formData) => {
//     dispatch(submitJobForm(formData, navigate));
//   };

//   return (
//     <>
//       <Col className="text-center">JOB</Col>

//       <Container>
//         <Row>
//           <Col>
//             <Form onSubmit={handleSubmit(submitHandler)}>
//               <Row>
//                 <Accordion defaultActiveKey="0">
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header>Presinoal Information</Accordion.Header>
//                     <Accordion.Body>
//                       <Row>
//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Full Name<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="fullName"
//                             placeholder="Enter Full Name..."
//                             {...register("fullName", { required: true })}
//                           />
//                           {errors.fullName && (
//                             <span className="text-danger">Full Name is required</span>
//                           )}
//                         </Form.Group>
//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Email<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="email"
//                             id="email"
//                             placeholder="Enter Email..."
//                             {...register("email", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.email && (
//                             <span className="text-danger">Email is required</span>
//                           )}
//                         </Form.Group>

//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Phone<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="number"
//                             name="phone_no"
//                             id="phone_no"
//                             placeholder="Enter Phone No..."
//                             {...register("phone_no", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.phone_no && (
//                             <span className="text-danger">Phone No is required</span>
//                           )}
//                         </Form.Group>

//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             DOB<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="date"
//                             name="date_of_birth"
//                             id="date_of_birth"
//                             placeholder="Enter DOB..."
//                             {...register("date_of_birth", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.date_of_birth && (
//                             <span className="text-danger">Dob id require</span>
//                           )}
//                         </Form.Group>
//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Father Name<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="father_Name"
//                             id="father_Name"
//                             placeholder="Enter Father Name..."
//                             {...register("father_Name", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.father_Name && (
//                             <span className="text-danger">Father Name is required</span>
//                           )}
//                         </Form.Group>

//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Gender<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="gender"
//                             id="gender"
//                             placeholder="Enter Gender..."
//                             {...register("gender", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.gender && (
//                             <span className="text-danger">Gender is required</span>
//                           )}
//                         </Form.Group>

//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Categoire<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="Category"
//                             id="Category"
//                             placeholder="Enter Category..."
//                             {...register("Category", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.Category && (
//                             <span className="text-danger">Category is required</span>
//                           )}
//                         </Form.Group>

//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Home City<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="home_city"
//                             id="home_city"
//                             placeholder="Enter Home City..."
//                             {...register("home_city", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.home_city && (
//                             <span className="text-danger">Home City is required</span>
//                           )}
//                         </Form.Group>
//                       </Row>
//                     </Accordion.Body>
//                   </Accordion.Item>

//                   <Accordion.Item eventKey="1">
//                     <Accordion.Header>Job Information</Accordion.Header>

//                     <Accordion.Body>
//                       <Row>
//                         <Form.Group as={Col} md="4" className="mb-3">
//                           <Form.Label htmlFor="selectType">
//                             Select Company{" "}
//                             <span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Select
//                             id="selectType"
//                             name="selectType"
//                             className="rounded-0"
//                             {...register("selectType", { required: true })}
//                           >
//                             <option value="">Select Exam</option>
//                             <option value="on">On Compuse</option>
//                             <option value="Off">Off Compuse</option>
//                           </Form.Select>
//                           {errors.selectType && (
//                             <span className="text-danger">Company is required</span>
//                           )}
//                         </Form.Group>
//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Apply Your Total Companies
//                             <span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="number"
//                             name="totalApplyCompanies"
//                             id="totalApplyCompanies"
//                             placeholder="Total Apply Companies..."
//                             {...register("totalApplyCompanies", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.totalApplyCompanies && (
//                             <span className="text-danger">Total Apply is required</span>
//                           )}
//                         </Form.Group>

//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             No Of Select Interview
//                             <span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="number"
//                             name="noOfSelectInterview"
//                             id="noOfSelectInterview"
//                             placeholder="Enter No Of Select Interview..."
//                             {...register("noOfSelectInterview", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.noOfSelectInterview && (
//                             <span className="text-danger">No of Select is required</span>
//                           )}
//                         </Form.Group>
//                       </Row>
//                     </Accordion.Body>
//                   </Accordion.Item>

//                   <Accordion.Item eventKey="2">
//                     <Accordion.Header>Companies Information</Accordion.Header>
//                     <Accordion.Body>
//                       <Row>
//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Company's Name<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="companies_name"
//                             id="companies_name"
//                             placeholder="Enter  Company's Name..."
//                             {...register("companies_name", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.companies_name && (
//                             <span className="text-danger">Company's is required</span>
//                           )}
//                         </Form.Group>
//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Company City<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="companies_city"
//                             id="companies_city"
//                             placeholder="Enter Companies City..."
//                             {...register("companies_city", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.companies_city && (
//                             <span className="text-danger">Company City is required</span>
//                           )}
//                         </Form.Group>

//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             Package lpa<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="number"
//                             name="package_lpa"
//                             id="package_lpa"
//                             placeholder="Enter Lpa..."
//                             {...register("package_lpa", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.package_lpa && (
//                             <span className="text-danger">Package lpa is required</span>
//                           )}
//                         </Form.Group>

//                         <Form.Group as={Col} md="4">
//                           <Form.Label>
//                             JOB ROLE<span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="job_role"
//                             id="job_role"
//                             placeholder="Enter Your Role..."
//                             {...register("job_role", { required: true })}
//                             className="rounded-2"
//                           />
//                           {errors.job_role && (
//                             <span className="text-danger">Job Role is required</span>
//                           )}
//                         </Form.Group>

//                         <Form.Group as={Col} md="4" className="mb-3">
//                           <Form.Label htmlFor="companiesType">
//                             Type Of Company{" "}
//                             <span className="text-danger">*</span>
//                           </Form.Label>
//                           <Form.Select
//                             id="companiesType"
//                             name="companiesType"
//                             className="rounded-0"
//                             {...register("companiesType", { required: true })}
//                           >
//                             <option value="">Select Type Of Companies</option>
//                             <option value="Service">Service-based</option>
//                             <option value="Product">Product-based</option>
//                           </Form.Select>
//                           {errors.companiesType && (
//                             <span className="text-danger">Select Type is required</span>
//                           )}
//                         </Form.Group>
//                       </Row>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>

//                 <Row>
//                   <Col md="12" className="text-center">
//                     <button
//                       type="submit"
//                       style={{ backgroundColor: "yellow" }}
//                       className="text-denger px-4 py-2 my-4 border-0 rounded-md"
//                     >
//                       SUMBIT
//                     </button>
//                   </Col>
//                 </Row>
//               </Row>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Job;






import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Accordion } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitJobForm } from "../../services/apiFunction/job";

const Job = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      token: token,
      fullName: "",
      companies_name: "",
      email: "",
      date_of_birth: "",
      phone_no: "",
      father_Name: "",
      gender: "",
      Category: "",
      home_city: "",
      companies_city: "",
      package_lpa: "",
      job_role: "",
      selectType: "",
      totalApplyCompanies: "",
      noOfSelectInterview: "",
      companiesType: "",
    },
  });

  const submitHandler = (formData) => {
    dispatch(submitJobForm(formData, navigate));
  };

  return (
    <>
      <Col className="text-center">JOB</Col>

      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(submitHandler)}>
              <Row>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Presinoal Information</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Full Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="fullName"
                            placeholder="Enter Full Name..."
                            {...register("fullName", { 
                              required: true,
                              minLength: 2,
                              maxLength: 50
                            })}
                          />
                          {errors.fullName && (
                            <span className="text-danger">Full Name is required and must be between 2 and 50 characters</span>
                          )}
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Email<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email..."
                            {...register("email", { 
                              required: true,
                              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                            })}
                            className="rounded-2"
                          />
                          {errors.email && (
                            <span className="text-danger">A valid Email is required</span>
                          )}
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Phone<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="phone_no"
                            id="phone_no"
                            placeholder="Enter Phone No..."
                            {...register("phone_no", { 
                              required: true,
                              minLength: 2,
                              maxLength: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.phone_no && (
                            <span className="text-danger">Phone No is required and must be a number between 2 and 50 characters</span>
                          )}
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            DOB<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="date"
                            name="date_of_birth"
                            id="date_of_birth"
                            placeholder="Enter DOB..."
                            {...register("date_of_birth", { required: true })}
                            className="rounded-2"
                          />
                          {errors.date_of_birth && (
                            <span className="text-danger">DOB is required</span>
                          )}
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Father Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="father_Name"
                            id="father_Name"
                            placeholder="Enter Father Name..."
                            {...register("father_Name", { 
                              required: true,
                              minLength: 2,
                              maxLength: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.father_Name && (
                            <span className="text-danger">Father Name is required and must be between 2 and 50 characters</span>
                          )}
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Gender<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="gender"
                            id="gender"
                            placeholder="Enter Gender..."
                            {...register("gender", { 
                              required: true,
                              minLength: 2,
                              maxLength: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.gender && (
                            <span className="text-danger">Gender is required and must be between 2 and 50 characters</span>
                          )}
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Categoire<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="Category"
                            id="Category"
                            placeholder="Enter Category..."
                            {...register("Category", { 
                              required: true,
                              minLength: 2,
                              maxLength: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.Category && (
                            <span className="text-danger">Category is required and must be between 2 and 50 characters</span>
                          )}
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Home City<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="home_city"
                            id="home_city"
                            placeholder="Enter Home City..."
                            {...register("home_city", { 
                              required: true,
                              minLength: 2,
                              maxLength: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.home_city && (
                            <span className="text-danger">Home City is required and must be between 2 and 50 characters</span>
                          )}
                        </Form.Group>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Job Information</Accordion.Header>

                    <Accordion.Body>
                      <Row>
                        <Form.Group as={Col} md="4" className="mb-3">
                          <Form.Label htmlFor="selectType">
                            Select Company{" "}
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select
                            id="selectType"
                            name="selectType"
                            className="rounded-0"
                            {...register("selectType", { required: true })}
                          >
                            <option value="">Select Exam</option>
                            <option value="on">On Campus</option>
                            <option value="Off">Off Campus</option>
                          </Form.Select>
                          {errors.selectType && (
                            <span className="text-danger">Company type is required</span>
                          )}
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Apply Your Total Companies
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="totalApplyCompanies"
                            id="totalApplyCompanies"
                            placeholder="Total Apply Companies..."
                            {...register("totalApplyCompanies", { 
                              required: true,
                              min: 2,
                              max: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.totalApplyCompanies && (
                            <span className="text-danger">Total Apply Companies is required and must be between 2 and 50</span>
                          )}
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            No Of Select Interview
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="noOfSelectInterview"
                            id="noOfSelectInterview"
                            placeholder="Enter No Of Select Interview..."
                            {...register("noOfSelectInterview", { 
                              required: true,
                              min: 2,
                              max: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.noOfSelectInterview && (
                            <span className="text-danger">No Of Select Interview is required and must be between 2 and 50</span>
                          )}
                        </Form.Group>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Companies Information</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Company's Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="companies_name"
                            id="companies_name"
                            placeholder="Enter  Company's Name..."
                            {...register("companies_name", { 
                              required: true,
                              minLength: 2,
                              maxLength: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.companies_name && (
                            <span className="text-danger">Company's Name is required and must be between 2 and 50 characters</span>
                          )}
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Company City<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="companies_city"
                            id="companies_city"
                            placeholder="Enter Companies City..."
                            {...register("companies_city", { 
                              required: true,
                              minLength: 2,
                              maxLength: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.companies_city && (
                            <span className="text-danger">Company City is required and must be between 2 and 50 characters</span>
                          )}
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Package lpa<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="package_lpa"
                            id="package_lpa"
                            placeholder="Enter Lpa..."
                            {...register("package_lpa", { 
                              required: true,
                              min: 2,
                              max: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.package_lpa && (
                            <span className="text-danger">Package lpa is required and must be between 2 and 50</span>
                          )}
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            JOB ROLE<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="job_role"
                            id="job_role"
                            placeholder="Enter Your Role..."
                            {...register("job_role", { 
                              required: true,
                              minLength: 2,
                              maxLength: 50
                            })}
                            className="rounded-2"
                          />
                          {errors.job_role && (
                            <span className="text-danger">Job Role is required and must be between 2 and 50 characters</span>
                          )}
                        </Form.Group>

                        <Form.Group as={Col} md="4" className="mb-3">
                          <Form.Label htmlFor="companiesType">
                            Type Of Company{" "}
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select
                            id="companiesType"
                            name="companiesType"
                            className="rounded-0"
                            {...register("companiesType", { required: true })}
                          >
                            <option value="">Select Type Of Companies</option>
                            <option value="Service">Service-based</option>
                            <option value="Product">Product-based</option>
                          </Form.Select>
                          {errors.companiesType && (
                            <span className="text-danger">Type Of Company is required</span>
                          )}
                        </Form.Group>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Row>
                  <Col md="12" className="text-center">
                    <button
                      type="submit"
                      style={{ backgroundColor: "yellow" }}
                      className="text-danger px-4 py-2 my-4 border-0 rounded-md"
                    >
                      SUBMIT
                    </button>
                  </Col>
                </Row>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Job;
