import Button from "@mui/material/Button"

const Hero=()=>{
    return(
    
        <div className="h-[700px] w-full bg-C-Violet flex items-center gap-[100px] pl-[100px]">
        <div data-aos="fade-left"> 
             <img src="/ip-hero-1.png" className='w-[700px] h-[540px]' alt="Italian Trulli"/>
        </div> 
             <div className='w-[500px] h-[240px] flex flex-col justify-between items-end'>
                <div className='pl-[135px]'>
                    <span className='text-[40px] text-[#f8f8f8] justify-end font-normal leading-[49px] font-montserrat '>Intelligently Route money Instantly To </span>
                </div>
                <div>
                    <span className='text-[55px] text-C-Btn1 font-extrabold leading-[67px] font-montserrat'>Anyone</span>
                </div>
                <div>
                    <Button variant="contained" className="bg-[#f8f8f8] rounded-[8px] w-[140px] text-black hidden md:block lg:ml-[50px]">Learn More</Button>
                </div> 
             </div>   
    </div>
    )
}

export default Hero