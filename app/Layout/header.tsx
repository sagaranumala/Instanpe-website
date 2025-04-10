
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Button } from "@mui/material";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if ((e.target as Element).closest(".menu-content") === null) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling when menu is closed
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is restored on unmount
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  return (
    <>
      <div className="header1 sticky top-0 w-full flex justify-between bg-C-Violet z-[1000] h-[100px] lg:pl-[6%] lg:pr-[6%] pl-[5%] pr-[5%]">
        <div
          className="rounded-lg mt-[26px] w-[200px] h-[50px] md:w-[250px] md:h-[70px]"
          data-aos="fade-left"
        >
          <Link href="/">
            <img src="/ip-white-logo.png" className="" alt="Italian Trulli" />
          </Link>
        </div>
        <div
          className="flex gap-[60px] mt-[42px] justify-center items-start hidden lg:block ml-[40px]"
          data-aos="flip-right"
        >
          <div className="flex lg:gap-[35px] xl:gap-[80px]">
            <Link href="/">
              <div className="text-white text-[16px] font-[500] leading-[19.5px] rounded-[10px] sticky hover:text-C-Btn1">
                Home
              </div>
            </Link>
            <Link href="/careers">
              <div className="text-white text-[16px] font-[500] leading-[19.5px] rounded-[10px] sticky hover:text-C-Btn1">
                Careers
              </div>
            </Link>
          </div>
        </div>
        <div>
          <Link href="/contact">
            <Button
              variant="contained"
              style={{ textTransform: "none" }}
              className="bg-C-Btn1 h-[36px] w-[121px] text-[16px] font-normal leading-[20px] hover:bg-[gray] hover:text-[white] rounded-[8px] mt-[34px] text-black hidden lg:block lg:ml-[50px]"
            >
              Contact Us
            </Button>
          </Link>
          <div className="block md:mr-[10px] mt-[30px] lg:hidden relative text-white sm:mr-[40px]">
            {showMenu ? (
              <CloseRoundedIcon
                className="text-[30px] cursor-pointer"
                onClick={handleMenu}
              />
            ) : (
              <MenuRoundedIcon
                className="text-[30px] cursor-pointer"
                onClick={handleMenu}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`fixed top-[75px] right-0 h-[150px] sm:w-[30%] md:w-[20%] bg-white rounded-md shadow-lg z-[999] transition-transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="menu-content flex flex-col items-start justify-center h-[90%] text-start pt-1">
          <Link href="/">
            <div
              className="mx-2 my-1 h-[30px] flex items-center"
              onClick={handleMenu}
            >
              <span className="hover:text-C-Violet">Home</span>
            </div>
          </Link>
          <Link href="/careers">
            <div
              className="mx-2 my-1 h-[30px] flex items-center"
              onClick={handleMenu}
            >
              <span className="hover:text-C-Violet">Careers</span>
            </div>
          </Link>
          <Link href="/contact">
            <div
              className="mx-2 my-1 h-[30px] flex items-center"
              onClick={handleMenu}
            >
              <span className="hover:text-C-Violet">Contact Us</span>
            </div>
          </Link>
        </div>
      </div>
      {showMenu && (
        <div
          className="fixed top-0 right-0 h-screen w-screen bg-black opacity-50 z-[998]"
          onClick={handleMenu}
        />
      )}
    </>
  );
};

export default Header;
