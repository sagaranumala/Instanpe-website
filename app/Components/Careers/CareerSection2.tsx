// import Carouselsm from "./Carouselsm"
// import Carousel from "./Carouselsm"
// import EmblaCarousel from "./EmblaCarousel"
// import { EmblaOptionsType } from 'embla-carousel'
// const OPTIONS: EmblaOptionsType = { loop: true }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

// const CareerSection2=()=> {
//     return (
//         <div className="lg:pl-[86px] mt-[50px] lg:pr-[86px]">
//             <div className="text-center">
//               {/* <h3 className='text-[#4f2d83] font-bold text-2xl '>Together We Succeed.... </h3> */}
//               <h3 className='text-[25px] xl:text-[40px] lg:text-[35px] md:text-[25px] font-bold text-[#4f2d83]'>Together We Succeed</h3>

//             {/* <div className="m-12 text-center"> */}
//               {/* <h3 className='text-[#4f2d83] font-bold text-2xl '>Together We Succeed.... </h3> */}
//               {/* <h3 className='pt-[100px] xl:text-[40px] lg:text-[35px] md:text-[25px] font-bold text-[#4f2d83]'>Together We Succeed.... </h3> */}

//               <p className="font-[400]  text-[14px] sm:text-[18px] leading-[22px] mt-[10px] px-[10px] sm:mt-[20px]">
//               We believe in employee empowerment and trust that an ownership driven culture brings the best out of people. We strive to nurture collaboration and teamwork amongst our employees, to boost innovation and deliver on our customer commitments
//               </p>
//             </div>

//             <div className="mt-[50px] flex justify-center">
//                <div>
//                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
//                <Carouselsm/>
//                </div>
              
//             </div>
//       </div>
//     )
//   }
  
//   export default CareerSection2



"use client"
import React from "react";
import { useMediaQuery } from "@mui/material";
import Carouselsm from "./Carouselsm";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CareerSection2 = () => {
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  return (
    <div className="lg:pl-[86px] mt-[50px] lg:pr-[86px]">
      <div className="text-center">
        <h3 className="text-[25px] xl:text-[40px] lg:text-[35px] md:text-[25px] font-bold text-[#4f2d83]">
          Together We Succeed
        </h3>
        <p className="font-[400] text-[14px] sm:text-[18px] leading-[22px] mt-[10px] px-[10px] sm:mt-[20px]">
          We believe in employee empowerment and trust that an ownership driven
          culture brings the best out of people. We strive to nurture
          collaboration and teamwork amongst our employees, to boost innovation
          and deliver on our customer commitments
        </p>
      </div>
      <div className="sm:mt-[50px]  mt-[20px] flex justify-center">
        <div>
          {isSmallScreen ? <Carouselsm /> : <EmblaCarousel slides={SLIDES} options={OPTIONS} />}
        </div>
      </div>
    </div>
  );
};

export default CareerSection2;

