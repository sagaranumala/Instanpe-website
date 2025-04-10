const Hero2=()=>{
    return(
        <div className="lg:p-[80px] p-[20px] w-full bg-C-Violet lg:flex lg:items-center justify-between sm:gap-[10px] gap-[30px]">
            <div data-aos="fade-left" className="flex justify-center w-[100%]">
                <img src="/IP-img1.png" className='sm:h-[400px] mt-[10px] h-[250px] xl:h-[477px] sm:w-[100%] w-[90%]' alt="Italian Trulli"/>
            </div>
            <div className="xl:w-[30%] flex flex-col items-center  sm:gap-y-[20px] lg:h-[381px] pb-[20px] sm:mt-[50px] my-[10px] pt-[20px]">
                <div className="hero1-text sm:font-[400] sm:text-[30px] text-[white] text-center lg:text-right sm:w-[414px] ">Connecting <span className="hero1-text sm:font-[800] sm:text-[32px] text-C-Btn1">Financial Institutions</span> With <span className="hero1-text sm:font-[800] sm:text-[32px] text-C-Btn1">Payment Networks</span></div>
                <div className="sm:font-[400] sm:text-[28px] hero1-text text-[white] text-center lg:text-right sm:w-[405px] mt-[30px]">Move Money Instantly, Intelligently and Securely to <span className="text-C-Btn1">Anyone, Anytime, Anywhere</span></div>
                {/* <div><button className="font-[500] text-[18px] leading-6 bg-[white] hover:bg-[gray] hover:text-[white] rounded-[8px] w-[140px] h-[40px] text-black sm:mt-[50px]">Learn More</button></div> */}
            </div>
        </div>
    )
}
 
export default Hero2