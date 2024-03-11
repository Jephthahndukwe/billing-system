import React from 'react'
import logo from '../Assets/logo3.png'
import  { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='lg:py-[4px] xs:py-[8px] lg:px-[40px] xs:px-[10px]'>
        <div className='flex flex-wrap justify-between items-center'>
            <div className='flex flex-wrap items-center gap-2'>
                <div className='bg-[#f8f9fa] lg:py-[20px] xs:py-[12px] lg:px-[20px] xs:px-[10px] text-center text-[#2a2e36] text-[14px] font-[700]'>
                    <h1><Link to='/dashboard'>Dashboard</Link></h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] lg:py-[20px] xs:py-[12px] lg:px-[20px] xs:px-[10px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1><Link to='/package'>Add Packages</Link></h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] lg:py-[20px] xs:py-[12px] lg:px-[20px] xs:px-[10px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1><Link to='/customer'>Add Customer</Link></h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] lg:py-[20px] xs:py-[12px] lg:px-[20px] xs:px-[10px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1><Link to='/invoice'>Create Invoice</Link></h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] lg:py-[20px] xs:py-[12px] lg:px-[20px] xs:px-[10px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1><Link to='/invoicelist'>Invoice List</Link></h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] lg:py-[20px] xs:py-[12px] lg:px-[20px] xs:px-[10px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1>Sales Report</h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] lg:py-[20px] xs:py-[12px] lg:px-[20px] xs:px-[10px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1>Add Product</h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] lg:py-[20px] xs:py-[12px] lg:px-[20px] xs:px-[10px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1>Add Sales</h1>
                </div>
            </div>
            <div className='flex justify-end items-end lg:mt-0 xs:mt-[2rem]'>
                <img src={logo} className='w-[50%]' />
            </div>
        </div>
    </div>
  )
}

export default Navbar