
"use client"
import React, { FormEvent, useState } from "react";
import axios from "axios";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { Button } from "@mui/material";
import { footerPages, locationIP, urls } from "../constant";
import Link from "next/link";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!email) {
    setError("Please enter your email ID");
    return;
  }

  setError("");
  const url = `${process.env.baseurl}${urls.subscribes}`;
  // console.log("Email to be sent:", email);

  try {
    const response = await axios.post(url, { data: { email } });
    console.log("Subscription successful!", response.data);
    toast.success("Subscription successful!");
  } catch (error) {
    console.error("Error subscribing:", error);
    toast.error("Subscription failed. Please try again.");
  }
  setEmail("");
};

const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(event.target.value);
};


  return (
    <section className="w-full bg-C-Violet mt-[-50px] pt-[50px] pb-[30px]">
      <div className="flex flex-wrap sm:justify-between gap-[20px] xl:gap-[100px] text-[15px] lg:pl-[6%] lg:pr-[6%] pl-[5%] pr-[5%]">
        <div className="flex flex-col gap-y-[20px]">
          <img
            src="/ip-white-logo.png"
            className="w-[230px] h-[50px]"
            alt="Italian Trulli"
          />
          <div>
            <span className="text-[16px] text-[#f8f8f8] font-normal leading-[20px]">
              Follow us on
            </span>
            <div className="flex gap-[10px] mt-[10px] items-center">
              <a href="https://x.com/instanpe" target="_blank">
                <XIcon className="text-white w-[22px] h-[22px]" />
              </a>
              <a
                href="https://www.linkedin.com/company/instanpe"
                target="_blank"
              >
                <LinkedInIcon className="text-white w-[30px] h-[30px]" />
              </a>
            </div>
          </div>
          <div>
            <span className="text-[16px] text-[#f8f8f8] font-normal leading-[20px] font-montserrat">
              Subscribe to get latest updates from us
            </span>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email ID"
                className="block h-[40px] mt-[10px] outline-none pl-[15px] text-[16px] w-[280px] rounded-[10px]"
                value={email}
                onChange={handleEmailChange}
              />
              {error && <div className="text-red-500 text-[14px] mt-[5px]">{error}</div>}
              <Button
                type="submit"
                variant="contained"
                style={{ textTransform: "none" }}
                className="bg-C-Btn1 rounded-[8px] h-[36px] w-[121px] text-[16px] font-normal leading-[20px] mt-[20px] text-black"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="text-[#FFFFFF] font-bold">Quick Links</div>
          <div className="ml-[30px] sm:ml-[0px] footerBox1 text-white font-light sm:mt-[30px] mt-[15px] flex flex-col lg:gap-2.5 md:gap-1.5 w-[18rem];">
            {footerPages.map((page, i) => (
              <Link href={page.path} key={i}>
                <div className="hover:text-C-Btn1 text-[16px] font-normal sm:leading-[24px] leading-[30px]">
                  {page.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="footerBox1 mt-[20px] text-white w-[300px] font-light flex flex-col sm:gap-1.5 gap-2.5 lg:gap-2.5 md:gap-1.5;">
          <div className="text-white font-bold">Contact us</div>
          <div className="flex gap-[20px] sm:mt-[20px] mt-[10px]">
            <div>
              <RoomOutlinedIcon />
            </div>
            <div className="flex flex-col">
              {locationIP.map((info, i) => (
                <div className="text-[16px] font-normal leading-[20px]" key={i}>
                  {info}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <div>
              <EmailOutlinedIcon className="text-[20px] hover:text-C-Btn1" />
            </div>
            <div className="text-[16px] font-normal leading-[20px]">
              contact@instanpe.com
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div>
              <CallRoundedIcon className="text-[20px] hover:text-C-Btn1" />
            </div>
            <div>
              <div className="text-[16px] font-normal leading-[20px]">
                +91 99590 98168
              </div>
            </div>
          </div>
          {/* <EmailIcon className="text-3xl hover:text-[blue]"/> */}
        </div>
      </div>
      
      <div className="text-[16px] font-[50] flex justify-center mt-[30px] text-[white]">
        2024, All rights reserved
      </div>
    </section>
  );
};

export default Footer;
