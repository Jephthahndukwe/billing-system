import React, { useState } from 'react'
import { RiLock2Fill } from "react-icons/ri";
import logo from '../Assets/logo3.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleLogin = () => {
        // Simulated admin credentials
        const adminUsername = 'admin';
        const adminPassword = '123';
    
       // Check if the entered credentials match the admin credentials
       if (username === adminUsername && password === adminPassword) {
        // If matched, navigate to the admin dashboard (not implemented here)
        navigate('/dashboard');
        setLoggedIn(true);
        setIsAdmin(true);
        console.log('Login successful! Redirecting to admin dashboard...');
      } else {
        // If not matched, show an error message
        setError('Invalid username or password');
      }
    };

    // const handleLogout = () => {
    //     setLoggedIn(false);
    //     setIsAdmin(false);
    //     navigate('/');
    //   };

  return (
    <div>
        <div className='py-[5px] lg:px-[40px] xs:px-[10px] flex justify-between items-center'>
            <div>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#FFB400] lg:text-[25px] xs:text-[14px] p-[10px] text-[#fff] rounded-[100px]'><RiLock2Fill /></div>
                    <div>
                        <h2 className='lg:text-[18px] xs:text-[14px] w-[150%] font-[500] leading-[18px]'>LOGIN TO DASHBOARD</h2>
                        <p className='text-[#9498a1] lg:text-[10px] xs:text-[9px] font-[400] leading-[18px]'>Enter your credentials below</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end items-end'>
                <img src={logo} className='lg:w-[40%] xs:w-[30%]' />
            </div>
        </div>
        <h2 className='text-[32px] text-center font-[700] xs:leading-[40px] lg:leading-[18px] tracking-[3px] mt-[4rem]'><span className='text-[#2A2E70]'>Tizeti</span> <span className='text-[#008000]'>Internet Service Provider</span></h2>
        <div className='flex justify-center items-center mt-[3rem] pb-[5rem]'>
            <form className='lg:px-[40px] xs:px-[15px] shadow-2xl lg:w-[50%] xs:w-[95%] pt-[3rem] pb-[3rem]' onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className='text-[16px] font-[600]'>Username</label><br/>
                    <input 
                        type='text' 
                        className='border-[1px] border-solid border-[#eee] py-[8px] px-[5px] outline-none text-[13px] w-[100%] mt-4'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    /><br/><br/>
                    <label className='text-[16px] font-[600] mt-[5rem]'>Password</label><br/>
                    <input 
                        type='password' 
                        className='border-[1px] border-solid border-[#eee] py-[8px] px-[5px] outline-none text-[13px] w-[100%] mt-4' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type='submit' className='bg-[#5081b3] py-[10px] px-[20px] w-[30%] text-[12px] rounded-[20px] text-[#fff] font-[700] mt-[2rem]' onClick={handleLogin}>LOG IN</button>
                    {error && <div className="mt-3 ms-2 text-red-600 font-[600] tracking-[1px]">{error}</div>}
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login