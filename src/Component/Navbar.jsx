import React from 'react'

const Navbar = () => {
  return (
    <div className='py-[4px] px-[40px]'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <div className='bg-[#f8f9fa] py-[20px] px-[20px] text-center text-[#2a2e36] text-[14px] font-[700]'>
                    <h1><a href='/dashboard'>Dashboard</a></h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] py-[20px] px-[20px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1><a href='/package'>Add Packages</a></h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] py-[20px] px-[20px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1><a href='/customer'>Add Customer</a></h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] py-[20px] px-[20px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1><a href='/invoice'>Create Invoice</a></h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] py-[20px] px-[20px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1><a href='/invoicelist'>Invoice List</a></h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] py-[20px] px-[20px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1>Sales Report</h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] py-[20px] px-[20px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1>Add Product</h1>
                </div>
                <div className='border-[2px] border-solid border-[#f8f9fa] bg-[#fff] py-[20px] px-[20px] text-[#c2c1c1] text-[14px] font-[500]'>
                    <h1>Add Sales</h1>
                </div>
            </div>
            <div>
                <h1 className='text-[30px]'>Logo here</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar