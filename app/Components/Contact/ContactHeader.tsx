//import { MDBBtn,MDBIcon } from 'mdb-react-ui-kit'
import { Button } from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

export default function ContactHeader() { 
  return (
    <div className='bg-C-Violet text-[white] text-center p-[3rem] flex flex-col gap-y-[20px] items-center'>
        <img src='/contact-img.jpg' alt="Contact-Image" />
        <div>
           <h3 className='text-[30px] font-[600] text-C-Btn1'>Let&#39;s Work Together!</h3>
            <p className='leading-[21px] mt-[10px] mb-[10px] text-[18px] font-normal'>Get in touch with us today! We&#39;re here to help with any questions or concerns you may have</p>
        </div>    
        <div className='flex flex-col gap-y-[20px] md:gap-x-3 md:flex md:flex-row'>
           <div className="bg-C-Btn1 hover:bg-[gray] hover:text-[white] flex justify-center items-center rounded-[8px] h-[50px] w-[260px] text-black  lg:ml-[20px] font-[500] text-[18px] leading-[30px]"><EmailIcon className='mr-[10px] text-[#4f2d83] hover:text-white'/>info@instanpe.com</div>
           <div className="bg-C-Btn1 hover:bg-[gray] hover:text-[white] flex justify-center items-center rounded-[8px] h-[50px] w-[260px] text-black  lg:ml-[20px] font-[500] text-[18px] leading-[30px]"><CallRoundedIcon className='mr-[10px] text-[#4f2d83]'/>+91 99590 98168</div>
        </div>
    </div>
  )
}
