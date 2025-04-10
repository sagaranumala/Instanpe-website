import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';

const Location1 = () => {
  return (
    <div className='lg:pl-[6%] lg:pr-[6%] pl-[5%] pr-[5%] mb-[100px] mt-[50px]'>
      <div className=" box1 min-h-[300px] w-[100%] flex flex-col sm:flex sm:items-center sm:flex-row bg-[#F6F6F6] rounded-xl sm:pr-[30px] pr-[10px] pb-[10px]">
        <div className="flex items-center gap-[10px]">
                {/* <FmdGoodSharpIcon className='text-[200px] text-[]'/> */}
                <div>
                     <img src="/location.png" className='w-[150px] h-[250px]' alt=""/>
                </div>
                <div className='w-[50%] text-[16px] leading-[27px] font-normal'>MeeraOne Building,3rd Floor,1-98/8/9/A,Capital Pk Rd, Cyber Hills Colony,VIP Hills, Silicon Valley,<br/> Madhapur, Hyderabad, Telangana 500081</div>
         </div>
        <div className='w-[100%] mapLocation flex justify-center'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.248370339927!2d78.38611279999999!3d17.447822500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a4be70cd0f%3A0xc1edf7c8790ef29!2sMeera%20One!5e0!3m2!1sen!2sin!4v1716550707564!5m2!1sen!2sin"
                height="250"
                style={{ border: 0, borderRadius: 25 ,width:'100%'}}
                loading="lazy"
            ></iframe>
        </div>
    </div>
    </div>
  );
};

export default Location1;