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
    <div className='bg-[#2A2E36] py-[10px] px-[40px]'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <h2 className='bg-[#5d6677] py-[10px] px-[30px] rounded-[5px] text-[#fff] text-[15px] font-[600]'>Change Password</h2>
                <div className='h-[40px] w-[2px] bg-[#5d6677]' />
                <h2 className='bg-[#5d6677] py-[10px] px-[30px] rounded-[5px] text-[#fff] text-[15px] font-[600]'>Payment Due: <span className='bg-[#FFFFE0] py-[3px] px-[13px] rounded-[5px] text-[red] font-[700]'>86</span></h2>
            </div>
            <div>
              <button className='bg-[#CC0000] py-[10px] px-[80px] rounded-[5px] text-[#fff] cursor-pointer text-[15px] font-[600]' onClick={handleLogout}>Log out</button>
            </div>
        </div>
    </div>
  )
}

export default TopNavbar