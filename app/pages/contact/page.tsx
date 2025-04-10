 //import Location from "@/app/Components/Contact/"
import Location1 from "@/app/Components/Contact/Location1"
import ContactForm from "../../Components/Contact/ContactForm"
import ContactHeader from "../../Components/Contact/ContactHeader"
import { Button } from "@mui/material"
import Link from "next/link"



const Contact=()=>{
    return(
        <div className="text-[black]">
             <ContactHeader/>
             <ContactForm/> 
            <Location1/> 
             
          {/* <div className='lg:ml-[6%] lg:mr-[6%] ml-[5%] mr-[5%] flex justify-center items-center relative h-[350px] sm:h-[300px]'>
            <div className='box1 w-[100%] h-[350px] sm:h-[300px] bg-[#f8f8f8] lg:top-[120px] top-[70px] absolute flex flex-col justify-center items-center gap-[30px] rounded-[10px]'>
                <div className="text-center">
                    <span className='text-[32px] leading-[67px] font-[700] text-C-Violet'>Let&#44;s Work Together!</span>
                </div>
                <div className="ml-[20px]">
                    <span className='text-[18px] leading-[22px]  font-normal text-[#000000]'>Get in touch with us today! We&#44;re here to help with any questions or concerns you may have.</span>
                </div>
                <div>
                    <Link href={"/pages/careers"}>
                            <Button variant="contained" className="bg-C-Btn1 rounded-[8px] w-[140px] text-black mb-[10px] lg:ml-[50px]">Careers</Button>
                        </Link>
                         
               </div> 
            </div>
        </div>  */}
        </div>
    )
}

export default Contact

// nyjr mtnp pgiy cvir