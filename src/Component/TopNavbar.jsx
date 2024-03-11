import React from 'react'
import { useNavigate } from 'react-router-dom';

const TopNavbar = ({ setLoggedIn, setIsAdmin }) => {

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/');
    setLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <div className='bg-[#2A2E36] lg:w-auto xs:w-[100vw] py-[10px] lg:px-[40px] xs:px-[10px]'>
        <div className='lg:flex justify-between items-center'>
            <div className='flex lg:gap-2 xs:gap-3 items-center'>
                <h2 className='bg-[#5d6677] lg:py-[10px] lg:px-[30px] xs:py-[8px] xs:px-[20px] rounded-[5px] text-[#fff] lg:text-[15px]  xs:text-[14px] font-[600]'>Change Password</h2>
                <div className='h-[40px] w-[2px] bg-[#5d6677]' />
                <h2 className='bg-[#5d6677] lg:py-[10px] lg:px-[30px] xs:py-[8px] xs:px-[20px] rounded-[5px] text-[#fff] lg:text-[15px]  xs:text-[14px] font-[600]'>Payment Due: <span className='bg-[#FFFFE0] py-[3px] px-[13px] rounded-[5px] text-[red] font-[700]'>86</span></h2>
            </div>
            <div>
              <button className='bg-[#CC0000] py-[10px] px-[80px] rounded-[5px] text-[#fff] cursor-pointer text-[15px] font-[600] lg:mt-0 xs:mt-5 lg:ms-0 xs:ms-[4rem]' onClick={handleLogout}>Log out</button>
            </div>
        </div>
    </div>
  )
}

export default TopNavbar