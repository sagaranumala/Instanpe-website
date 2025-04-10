import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const News = () => {
  return (
    <div className='flex flex-col gap-y-[50px] items-center rounded-b-[30px] lg:pl-[6%] lg:pr-[6%] pl-[5%] pr-[5%]  h-[800px]'>
              <h1 className='pt-[100px] text-[40px] font-bold text-C-Violet'>Latest News</h1>
              <div className='flex gap-[20px]   mt-[50px]  text-[18px]'>
                 <div className='box2 bg-white w-[35%] rounded-[10px] shadow-lg shadow-black-500/50'>
                    <div className='h-[200px] w-[100%] bg-C-Blue rounded-t-[10px]'></div>
                        <div className='p-[20px]'>
                            <h3>Title</h3>
                            <span className='font-[100] text-C-Gray'>Date, Time</span>
                            <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Sagittis at faucibus facilisis lectus. Amet 
                            velit non sem semper habitant. Arcu 
                            massa nunc curabitur placerat. 
                            </p>
                        </div>
                    <div className='flex justify-end'>
                        <ArrowForwardIcon className='text-[40px] mr-[20px]'/>
                    </div>
                 </div> 
                 <div className='box2 bg-white bg-white md:w-[35%] rounded-[10px] shadow-lg shadow-black-500/50'>
                    <div className='h-[200px] w-[100%] bg-C-Blue rounded-t-[10px]'></div>
                    <div className='p-[20px]'>
                        <h3>Title</h3>
                        <span className='font-[100] text-C-Gray'>Date, Time</span>
                        <p>
                        Lorem ipsum dolor sit amet consectetur. 
                        Sagittis at faucibus facilisis lectus. Amet 
                        velit non sem semper habitant. Arcu 
                        massa nunc curabitur placerat. 
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <ArrowForwardIcon className='text-[40px] mr-[20px]'/>
                    </div>
                 </div> 
                 <div className='box2 bg-white bg-white md:w-[35%] rounded-[10px] shadow-lg shadow-black-500/50'>
                    <div className='h-[200px] w-[100%] bg-C-Blue rounded-t-[10px]'></div>
                    <div className='p-[20px]'>
                        <h3>Title</h3>
                        <span className='font-[100] text-C-Gray'>Date, Time</span>
                        <p>
                        Lorem ipsum dolor sit amet consectetur. 
                        Sagittis at faucibus facilisis lectus. Amet 
                        velit non sem semper habitant. Arcu 
                        massa nunc curabitur placerat. 
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <ArrowForwardIcon className='text-[40px] mr-[20px]'/>
                    </div>
                 </div> 
             </div>
        </div>
  )
}

export default News
