
 
import { Button } from "@mui/material"
import Link from "next/link"
 
 
 const FooterTop=()=>{
     return(
        <div className="">
             <div className='lg:ml-[6%] lg:mr-[6%] ml-[5%] mr-[5%] flex justify-center items-center relative h-[350px] sm:h-[300px]'>
                <div className='box1 w-[100%] h-[250px] sm:h-[250px] bg-[#f8f8f8] lg:top-[50px] top-[70px] absolute flex flex-col justify-center items-center gap-[30px] rounded-[10px]'>
                    <div className="text-center">
                        <span className='sm:text-[32px] sm:leading-[67px] sm:font-[700] text-[22px]  font-[700] leading-[20px] text-C-Violet'>Let&#39;s Work Together!</span>
                    </div>
                    <div className="ml-[20px]">
                        <span className='text-[18px] leading-[22px]  font-normal text-[#000000]'>Get in touch with us today! We&#39;re here to help with any questions or concerns you may have</span>
                    </div>
                    <div>
                    <Link href={"/contact"}>
                            <Button variant="contained" style={{ textTransform: 'none' }} className="bg-C-Btn1 rounded-[8px] h-[36px] w-[121px] text-[16px] font-normal leading-[20px] text-black mb-[10px] lg:ml-[30px]">Contact Us</Button>
                    </Link>
                    </div> 
                </div>
            </div>
            <div className="bg-C-Violet h-[200px] mt-[-150px]">
               
            </div>

        </div>
       
     )
 }
 
 export default FooterTop
 
