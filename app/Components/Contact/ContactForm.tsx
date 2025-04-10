// with validation
"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { urls } from "@/app/constant";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  companyName: string;
  companyType: string;
  interestedIn: string;
  location: string;
  country: string;
  message: string;
}

const contactForm = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("email is required"),
  phone: Yup.string(),
  jobTitle: Yup.string().required("Job Title is required"),
  companyName: Yup.string().required("companyName is required"),
  companyType: Yup.string().required("companyName Type is required"),
  interestedIn: Yup.string().required("Interest is required"),
  location: Yup.string().required("Location is required"),
  country: Yup.string().required("Country is required"),
  message: Yup.string().required("Message is required"),
});

const Contact: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<FormValues>();
  

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    companyName: "",
    companyType: "",
    interestedIn: "",
    location: "",
    country: "",
    message: "",
  };

  const sendemail = async (values: FormValues) => {
    const formData = { data: values };
    console.log("Form Values:", formData);

    const url = `${process.env.baseurl}${urls.contacturl}`; // Use baseurl from environment variables
    try {
      const response = await axios({
        method: "post",
        url,
        data: formData,
      });

      console.log("Response:", response.data);
      console.log(formData);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: contactForm,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async (values, { resetForm }) => {
      await sendemail(values);
      resetForm(); // Reset form fields after submission
    },
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    formik;

  return (
    <form onSubmit={handleSubmit}>
      <div className="lg:pl-[6%] lg:pr-[6%] pl-[5%] pr-[5%] flex flex-col sm:gap-y-[50px] gap-y-[30px] justify-center items-center rounded-b-[30px]">
        <h1 className="sm:pt-[50px] pt-[30px] sm:text-[18px] text-[14px] font-normal w-[90%] text-center">
          We would love to answer any questions that you might have about our
          products, services or companyName. Fill in the form below and we will
          respond to your queries shortly
        </h1>
        <div className="bg-[#6139e51b] rounded-[10px] pl-[30px] sm:pb-[50px] sm:pl-[60px] sm:pt-[40px] pt-[20px] sm:pr-[20px]">
          <div className="flex flex-col sm:flex sm:flex-row gap-[20px] flex-wrap pr-[25px] sm:pr-[2px]">
            <div className=" lg:w-[47%] sm:w-[47%] w-[97%] ">
              <label htmlFor="firstName" className="text-[16px] font-light">
                First Name<span className="text-red-500">*</span>
              </label>
              <br></br>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] text-[16px] tracking-wide ${
                  errors.firstName && touched.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && touched.firstName && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.firstName}
                </div>
              )}
            </div>
            <div className=" lg:w-[47%] sm:w-[47%] w-[97%] ">
              <label htmlFor="lastName" className="text-[16px] font-light">
                Last Name<span className="text-red-500">*</span>
              </label>
              <br></br>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] text-[16px] tracking-wide ${
                  errors.lastName && touched.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && touched.lastName && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.lastName}
                </div>
              )}
            </div>
            <div className=" lg:w-[47%] sm:w-[47%] w-[97%] ">
              <label htmlFor="email" className="text-[16px] font-light">
                E-mail<span className="text-red-500">*</span>
              </label>
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] text-[16px] tracking-wide ${
                  errors.email && touched.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.email}
                </div>
              )}
            </div>
            <div className=" lg:w-[47%] sm:w-[47%] w-[97%] ">
              <label htmlFor="phone" className="text-[16px] font-light">
                Phone
              </label>
              <br></br>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] text-[16px] tracking-wide ${
                  errors.phone && touched.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && touched.phone && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.phone}
                </div>
              )}
            </div>
            <div className=" lg:w-[47%] sm:w-[47%] w-[97%] ">
              <label htmlFor="firstName" className="text-[16px] font-light">
                First Name<span className="text-red-500">*</span>
              </label>
              <br></br>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] text-[16px] tracking-wide ${
                  errors.firstName && touched.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && touched.firstName && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.firstName}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-[20px] flex-wrap mt-[30px]">
            <div className=" lg:w-[22.6%]  sm:w-[96%] w-[90%]">
              <label htmlFor="jobTitle" className="text-[16px] font-light">
                Job Title<span className="text-red-500">*</span>
              </label>
              <br></br>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.jobTitle}
                className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] text-[16px] tracking-wide ${
                  errors.jobTitle && touched.jobTitle ? "border-red-500" : ""
                }`}
              />
              {errors.jobTitle && touched.jobTitle && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.jobTitle}
                </div>
              )}
            </div>

            <div className="lg:w-[47%] sm:w-[96%] w-[90%]">
              <label htmlFor="companyName" className="text-[16px] font-light">
                Company Name<span className="text-red-500">*</span>
              </label>
              <br></br>
              <input
                type="text"
                id="companyName"
                name="companyName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.companyName}
                className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] outline-C-Btn1 text-[16px] tracking-wide ${
                  errors.companyName && touched.companyName
                    ? "border-red-500"
                    : ""
                }`}
              />
              {errors.companyName && touched.companyName && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.companyName}
                </div>
              )}
            </div>

            <div className=" lg:w-[22.6%] sm:w-[96%] w-[90%]">
              <label htmlFor="companyType" className="text-[16px] font-light">
                Company Type<span className="text-red-500">*</span>
              </label>
              <br />
              <div className="custom-select-container w-full">
                <select
                  id="companyType"
                  name="companyType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyType}
                  className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] text-[16px] tracking-wide ${
                    errors.companyType && touched.companyType
                      ? "border-red-500"
                      : ""
                  }`}
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="Financial Institution">
                    Financial Institution
                  </option>
                  <option value="Government">Government</option>
                  <option value="NBFC">NBFC</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {errors.companyType && touched.companyType && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.companyType}
                </div>
              )}
            </div>

            <div className=" lg:w-[22.6%] sm:w-[96%] w-[90%]">
              <label htmlFor="interestedIn" className="text-[16px] font-light">
                Interested In<span className="text-red-500">*</span>
              </label>
              <br></br>
              <div className="custom-select-container w-full">
                <select
                  id="interestedIn"
                  name="interestedIn"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.interestedIn}
                  className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] text-[16px] tracking-wide ${
                    errors.interestedIn && touched.interestedIn
                      ? "border-red-500"
                      : ""
                  }`}
                >
                  <option value="" disabled selected>
                    {" "}
                    Select an option
                  </option>
                  <option value="FedNow">FedNow</option>
                  <option value="FedWire">FedWire</option>
                  <option value="TCH/RTP">TCH/RTP</option>
                  <option value="SWIFT">SWIFT</option>
                  <option value="ISO 20022 Migration">
                    ISO 20022 Migration
                  </option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {errors.interestedIn && touched.interestedIn && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.interestedIn}
                </div>
              )}
            </div>
            <div className=" lg:w-[47%] sm:w-[96%] w-[42%]">
              <label htmlFor="location" className="text-[16px] font-light">
                Location<span className="text-red-500">*</span>
              </label>
              <br></br>
              <input
                type="text"
                id="location"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] text-[16px] tracking-wide ${
                  errors.location && touched.location ? "border-red-500" : ""
                }`}
              />
              {errors.location && touched.location && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.location}
                </div>
              )}
            </div>
            <div className=" lg:w-[22.6%] sm:w-[96%] w-[42%]">
              <label htmlFor="country" className="text-[16px] font-light">
                Country<span className="text-red-500">*</span>
              </label>
              <br></br>
              <input
                type="text"
                id="country"
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
                className={`w-[100%] h-[40px] rounded-[3px] formInput pl-[10px] text-[16px] tracking-wide ${
                  errors.country && touched.country ? "border-red-500" : ""
                }`}
              />
              {errors.country && touched.country && (
                <div className="text-red-500 text-[14px] mt-[5px]">
                  {errors.country}
                </div>
              )}
            </div>
          </div>

          <div className="mt-[30px] sm:w-[96%] w-[90%]">
            <label htmlFor="message" className="text-[16px] font-light">
              Message<span className="text-red-500">*</span>
            </label>
            <br></br>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className={`formInput w-[100%] h-[120px] rounded-[3px] pl-[10px] text-[16px] tracking-wide ${
                errors.message && touched.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && touched.message && (
              <div className="text-red-500 text-[14px] mt-[5px]">
                {errors.message}
              </div>
            )}
            <div className="mt-[20px]">
              <span className="sm:text-[16px]  text-[14px] font-thin">
                By submitting this form, you agree to the terms and conditions
                stated in the Privacy Policy
              </span>
            </div>
          </div>

          <div className="">
            <Button
              variant="contained"
              type="submit"
              style={{ textTransform: "none" }}
              className="sm:ml-[39%] ml-[30%] bg-C-Btn1 rounded-[8px] h-[36px] w-[121px] text-[16px] font-normal leading-[20px] text-black sm:mt-[30px]  mt-[10px] sm:mb-0 mb-[20px] hover:bg-[#4f2d83] hover:text-white"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      {submittedData && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Submitted Data:</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </form>
  );
};

export default Contact;
