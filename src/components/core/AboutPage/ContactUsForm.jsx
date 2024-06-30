import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
// import { apiConnector } from '../../services/apiConnector';
// import { contactusEndpoint } from '../../services/apis';
import toast from "react-hot-toast";
// import countryCode from "../../data/countrycode.json";
import style from "./contact.module.css"
const ContactUsForm = () => {
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setloading(true);
      const phoneNo = data.countryCode + "  " + data.phoneNo;
      const { firstName, lastName, email, message } = data;

      // const res = await apiConnector("POST",contactusEndpoint.CONTACT_US_API,{firstName,lastName,email,message,phoneNo});
      const res = { Status: "ok" };
      if (res.data.success === true) {
        toast.success("Message sent successfully");
      } else {
        toast.error("Something went wrong");
      }
      console.log("contact response", res);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <div className=".custom-loader w-[100%] pt-[30%] pb-[30%]">
      <div className="custom-loader"></div>
    </div>
  ) : (
    <div className={style.conact_conatiner}>
      <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-7"}>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[38%]">
            <label htmlFor="firstname" className="lable-style text-white">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              {...register("firstName", { required: true })}
              className="form-style"
            />
            {errors.firstName && (
              <span className=" text-danger">Enter Firstname *</span>
            )}
          </div>


          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="firstname" className="lable-style text-white">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
              {...register("lastName", { required: true })}
              className="form-style"
            />
            {errors.lastName && (
              <span className=" text-danger">Enter lastname *</span>
            )}
          </div>

         
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="lable-style text-white">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="form-style"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger">Enter Email *</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNo" className="lable-style text-white">
            Phone Number
          </label>
          <div className="d-flex gap-5">
            <div className="flex w-[81px] flex-col gap-2">
              <select
                type="text"
                name="countrycode"
                id="countryCode"
                className="form-style"
                {...register("countryCode", { required: true })}
              >
                {/* {countryCode.map((item, index) => {
                  return (
                    <option key={index} value={item.code}>
                      {item.code} - {item.country}
                    </option>
                  );
                })} */}
              </select>
            </div>
            <div className="flex w-[calc(100%-90px)] flex-col gap-2">
              <input
                type="tel"
                name="phoneNo"
                id="phonenumber"
                placeholder="12345 67890"
                className="form-style "
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Please enter phone Number *",
                  },
                  maxLength: {
                    value: 10,
                    message: "Enter a valid Phone Number *",
                  },
                  minLength: {
                    value: 8,
                    message: "Enter a valid Phone Number *",
                  },
                })}
              />
              {errors.phoneNo && (
                <span className=" text-danger">
                  {errors.phoneNo.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="lable-style text-white">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Enter your message here"
            className="form-style"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-danger">Enter your message *</span>
          )}
        </div>

        <button
          type="submit"
          className="rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 hover:scale-95 hover:shadow-none  disabled:bg-richblack-500 sm:text-[16px] "
        style={{textAlign: 'center',backgroundColor:"yellow",
          padding:'10px', marginBottom:'10px',borderRadius:'20px',margin:"0 auto",display:"flex"}}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
