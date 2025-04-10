
'use client'
import { useState } from 'react';
import * as React from 'react';

import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ApplicationForm from './ApplicationForm';
import Drawer from '@mui/material/Drawer';
import { ListItem } from '@mui/material';

type Anchor = 'right';


  interface DashboardProps {
    jobID:any;
   
  }
 
  const JobApplyDrawer: React.FC<DashboardProps> = ({jobID}) => {
console.log(jobID);
  const [state, setState] = useState({ right: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const closeDrawer = () => {
    setState({ ...state, right: false });
  };

  return (
    <div className=' '>
    
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            variant="contained"
            className='hover:bg-[gray] hover:text-[white] ml-[50px] h-[35px] sm:w-[178px]  w-[130px]  text-[#4f2d83] overflow-auto  bg-[#e4b838] font-[500px] text-[18px] leading-[22px] normal-case cursor-pointer'
          >
            Apply Now
          </Button>
          <div>
      

          <div className='relative'>
                <div className='absolute mr-[200px]'>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, true)}
                      className='absolute mr-[100px]'
                    >

                      <div className='sticky top-0 z-50 flex justify-between h-[80px] bg-[#b8a4d7] shadow-lg items-center py-2 px-10'>
                        <h2 className='sm:text-[22px] text-[20px] sm:ml-[0px] ml-[10%]  font-[600] text-[#ffffff]'>Fill the details</h2>
                        <Button
                          onClick={toggleDrawer('right', false)}
                          variant="contained"
                          className='hover:bg-[gray] hover:text-[white]  h-[40px] w-[50px] text-[#4f2d83] bg-[#e4b838] font-[500px] text-[18px] leading-[22px] normal-case cursor-pointer'
                        >
                          <CloseIcon />
                        </Button>
                      </div>
                      <div className=' bg-[#6139e521] relative'>
                        <ApplicationForm closeDrawer={closeDrawer}  jobID={jobID}/>
                      </div>
                    </Drawer>
                </div>
          </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default JobApplyDrawer;