import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'

const Sales = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <div className='bg-[#F8F9FA] pt-[1rem] pb-[2rem]'>
            <div className='flex gap-[1rem] lg:px-[20px] xs:px-[10px]'>
                <aside className='w-[20%] h-[75vh] bg-[#fff] border-[1.5px] border-solid border-[#eee] lg:block xs:hidden'>
                    <h2 className='text-[14px] bg-[#153450] py-[15px] px-[20px] text-[#fff] font-[500]'>QUICK LINKS</h2>
                    <div className=''>
                        <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Payment Collection</span></h2>
                        <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Add Company</span></h2>
                        <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>User History</span></h2>
                        <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Send SMS</span></h2>
                        <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Add Area</span></h2>
                        <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Add Expense</span></h2>
                        <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Expense Report</span></h2>
                        <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Boys Collections</span></h2>
                        <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] pb-3'><span>Drill Down Report</span></h2>
                    </div>
                </aside>
                <div className='lg:w-[80%] xs:w-[95vw]'>
                    <h2 className='text-[14px] bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>SALES REPORT</h2>
                    <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                        <form className="px-[10px] mt-8 flex flex-wrap">
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Package</label><br/>
                               <select className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" >
                                    <option>--Select---</option>
                               </select>
                            </span>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Customer Name</label><br/>
                               <select className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md">
                                <option>--Select--</option>
                               </select>
                            </span>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>From Date</label><br/>
                                <input type='date'  className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                            </span>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>To Date</label><br/>
                                <input type='date'  className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                            </span>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Total Sales</label><br/>
                                <input type='text'  className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                            </span>
                            <div className='flex items-start justify-start gap-3 lg:mt-[6rem] xs:mt-4 lg:ms-[-29rem]'>
                                <button type='submit' className='bg-[#5081b3] py-[10px] lg:px-[30px] xs:px-[17px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>View Report</button>
                                <button type='submit' className='bg-[#5081b3] py-[10px] lg:px-[50px] xs:px-[17px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>Refresh</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sales