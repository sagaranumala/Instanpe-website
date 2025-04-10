


//with validation

import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { toast } from "react-toastify";
import { urls } from "@/app/constant";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: string[];
  resume: File | null;
}

interface UploadedFile {
  id: number;
  name: string;
  url: string;
  size: number;
}

interface FormComponentProps {
  closeDrawer: () => void;
  jobID:any;
}

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]*$/, "Phone number must be numeric")
    .required("Phone number is required"),
  skills: yup.array().min(1, "At least one skill is required").required("Skills are required"),
  resume: yup
    .mixed()
    .required("Resume is required")
});



const FormComponent: React.FC<FormComponentProps> = ({jobID, closeDrawer}) => {

  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [skillInput, setSkillInput] = useState<string>("");

  const url = `${process.env.baseurl}${urls.jobformurl}`; // Use baseurl from environment variables

console.log(url)

  const formik = useFormik<FormData>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      skills: [],
      resume: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const jobApplicationData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        skills: values.skills.map((skill) => ({ name: skill })),
        resume: uploadedFile ? uploadedFile.id : null,
        jobID:jobID,
      };


      try {
        await axios.post(
         url,
          { data: jobApplicationData }
        );
        toast.success("Applied successfully!");
      } catch (error) {
        toast.error("Application submission failed!");
        console.error("Error submitting application:", error);
      }

      formik.resetForm();
      setUploadedFile(null);
      closeDrawer();
    },
  });

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillInput(e.target.value);
  };

  const handleSkillKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSkillAdd();
    }
  };

  const handleSkillAdd = () => {
    if (skillInput.trim() && !formik.values.skills.includes(skillInput.trim())) {
      formik.setFieldValue("skills", [...formik.values.skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    formik.setFieldValue("skills", formik.values.skills.filter((s) => s !== skill));
  };

  const handleClearSkills = () => {
    formik.setFieldValue("skills", []);
    setSkillInput("");
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = `${process.env.baseurl}${urls.resumeurl}`; // Use baseurl from environment variables
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      try {
        const fileData = new FormData();
        fileData.append("files", file);

        const response = await axios.post(
          url,
          fileData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const uploadedFile = response.data[0];

        formik.setFieldValue("resume", file);
        setUploadedFile({
          id: uploadedFile.id,
          name: uploadedFile.name,
          size: uploadedFile.size,
          url: uploadedFile.url,
        });
      } catch (error) {
        toast.error("File upload failed!");
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleCancel = () => {
    closeDrawer();
    formik.resetForm();
    setUploadedFile(null);
  };
  const url1 =  `${process.env.baseurl}${urls.jobformurl}`;
  console.log(url1)
  return (
    <>
      <div className="rounded-sm">
        <form onSubmit={formik.handleSubmit} className="pt-[10px] flex flex-col w-[100%] pl-[50px]">
          <div className="pl-[50px]  sm:pl-[0px] w-[80%] sm:w-[90%] mb-6 relative">
            <label className="block text-[14px] leading-[20px] ">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="w-full px-3 py-2 rounded-md formInput"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            ) : null}
            {formik.values.firstName && (
              <button
                type="button"
                className="absolute top-8 right-3 text-red-500 hover:text-red-700"
                onClick={() => formik.setFieldValue("firstName", "")}
              >
                &times;
              </button>
            )}
          </div>
          <div className="pl-[50px] sm:pl-[0px] w-[80%] sm:w-[90%] mb-6 relative">
            <label className="block text-[14px] leading-[20px] ">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="w-full px-3 py-2 rounded-md formInput"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            ) : null}
            {formik.values.lastName && (
              <button
                type="button"
                className="absolute top-8 right-3 text-red-500 hover:text-red-700"
                onClick={() => formik.setFieldValue("lastName", "")}
              >
                &times;
              </button>
            )}
          </div>
          <div className=" pl-[50px] sm:pl-[0px] w-[80%] sm:w-[90%] mb-6 relative">
            <label className="block text-[14px] leading-[20px] ">
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="w-full px-3 py-2 rounded-md formInput"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
            {formik.values.email && (
              <button
                type="button"
                className="absolute top-8 right-3 text-red-500 hover:text-red-700"
                onClick={() => formik.setFieldValue("email", "")}
              >
                &times;
              </button>
            )}
          </div>
          <div className="pl-[50px] sm:pl-[0px] w-[80%] sm:w-[90%] mb-6 relative">
            <label className="block text-[14px] leading-[20px] ">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="w-full px-3 py-2 rounded-md formInput"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            ) : null}
            {formik.values.phone && (
              <button
                type="button"
                className="absolute top-8 right-3 text-red-500 hover:text-red-700"
                onClick={() => formik.setFieldValue("phone", "")}
              >
                &times;
              </button>
            )}
          </div>

          <div className="ml-[20px] sm:ml-[0px] w-[80%] sm:w-[90%] relative self-center sm:self-start">
                   <div>
                   <label className="block text-[14px] leading-[20px] ">
                    Skills<span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2 w-full">
                    {formik.values.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-blue-400 text-white rounded-md  mt-1 mb-1 px-3 py-1"
                      >
                        <span>{skill}</span>
                        <button
                          type="button"
                          className="ml-2  text-white hover:text-red-700"
                          onClick={() => handleRemoveSkill(skill)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                   </div>
          </div>

          <div className="pl-[50px] sm:pl-[0px] w-[80%] sm:w-[90%] mb-6 relative flex flex-col">
            
            <div className="relative flex  mt-0 gap-4">
              <input
                type="text"
                value={skillInput}
                onChange={handleSkillChange}
                onKeyPress={handleSkillKeyPress}
                className="w-[200px] sm:w-[300px] px-3 py-2 formInput rounded-md pr-10"
              />
              {skillInput && (
                <button
                  type="button"
                  className="absolute top-[25px] transform -translate-y-1/2 right-[95px] text-green-500 hover:text-green-700"
                  onClick={handleSkillAdd}
                >
                  <AddIcon />
                </button>
              )}
              <button
                type="button"
                className="px-3 py-1 bg-gray-600 text-white rounded-md h-[40px] mt-1 hover:bg-gray-700"
                onClick={handleClearSkills}
              >
                Clear
              </button>
            </div>
            {formik.touched.skills && formik.errors.skills ? (
              <div className="text-red-500 text-sm">{formik.errors.skills}</div>
            ) : null}
          </div>

          <div className="pl-[50px] sm:pl-[0px] w-[80%] sm:w-[90%] mb-[17px]">
            <label className="block text-[14px] leading-[18px] ">
              Upload Resume<span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="resume"
              onChange={(e) => {
                handleFileUpload(e);
                formik.setFieldValue("resume", e.currentTarget.files ? e.currentTarget.files[0] : null);
              }}
              accept=".pdf,.doc,.docx,"
              required
              className="w-full py-2  rounded-md"
            />
            <span className="text-sm text-red-500">
             Upload .doc or .pdf file only
           </span>
            {formik.touched.resume && formik.errors.resume ? (
              <div className="text-red-500 text-sm">{formik.errors.resume}</div>
            ) : null}
          </div>

          <div>
  
                    </div>


        </form>
      </div>
      <div className="flex justify-between sticky bottom-0 z-50 items-center h-[60px] w-full px-10 bg-[#b8a4d7] shadow-upward">
        <h1
          onClick={handleCancel}
          className="px-4 ml-16 py-2 cursor-pointer hover:text-[#dfb81c] text-black text-[18px] text-center rounded-[8px]"
        >
          Cancel
        </h1>
        <button
          type="button"
          onClick={formik.submitForm}
          className="px-2 py-2 w-[200px] h-[40px] text-black text-[18px] hover:text-[white] bg-C-Btn1 hover:bg-gray-400 shadow-lg rounded-[8px]"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default FormComponent;
