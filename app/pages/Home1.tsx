"use client"
import { Button } from "@mui/material"
import Hero1 from "../Components/Hero1"
import useMediaQuery from "@mui/material/useMediaQuery";
import FedNow from "../Components/Fednow"
import News from "../Components/News"
import PaymentBenefits from "../Components/PaymentBenefits"
import Usecases from "../Components/Usecases"
import FooterTop from "../Layout/FooterTop"
import Instanpebenfit from "../Components/Instanpebenfit"
import Fednowsm from "../Components/Fednowsm"

const Home1=()=>{
    const isSmallScreen = useMediaQuery("(max-width: 786px)");
    console.log(process.env.NEXT_PUBLUC_URL)
    return(
        <div>
       
         <Hero1/>
         {/* <Careers/> */}
         <PaymentBenefits/>
         {/* <Usecases/>  */}
          
         {isSmallScreen ? <Fednowsm /> : <FedNow />}
          <Instanpebenfit/>

          {/* <News/> */}
        
          {/* <div className='flex justify-center items-center relative h-[300px]'>
               <div className='box1 w-[80%] h-[300px] bg-[#f8f8f8] top-[120px] absolute flex flex-col justify-center items-center gap-[30px] rounded-[10px]'>
                    <div>
                        <span className='text-[32px] leading-[67px] font-[700] text-C-Violet'>Let's Work Together!</span>
                    </div>
                    <div>
                         <span className='text-[18px] leading-[22px] font-normal text-[#000000]'>Get in touch with us today! We're here to help with any questions or concerns you may have.</span>
                    </div>
                    <div>
                        <Button variant="contained" className="bg-C-Btn1 rounded-[8px] w-[140px] text-black hidden md:block lg:ml-[50px]">Contact Us</Button>
                    </div> 
               </div>
           </div> */}
           <FooterTop/>
    </div>
    )
}
export default Home1