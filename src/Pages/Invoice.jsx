import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'

const Invoice = () => {
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
        <h2 className='text-[14px] bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>GENERATE MONTHLY INVOICE</h2>
            <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                <form className="px-[10px] mt-8 flex flex-wrap">
                    <span className="mb-4 w-full md:w-1/2 md:pr-4">
                        <label>Invoice Creation Date</label><br/>
                        <input type='date'  className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </span>
                    <span className="mb-4 w-full md:w-1/2 md:pr-4">
                        <label>Invoice Month</label><br/>
                        <select  className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md">
                            <option>--Select---</option>
                            <option>JAN-2024</option>
                            <option>FEB-2024</option>
                            <option>MAR-2024</option>
                            <option>APR-2024</option>
                            <option>MAY-2024</option>
                            <option>JUN-2024</option>
                            <option>JUL-2024</option>
                            <option>AUG-2024</option>
                            <option>SEP-2024</option>
                            <option>OCT-2024</option>
                            <option>NOV-2024</option>
                            <option>DEC-2024</option>
                        </select>
                    </span>
                    <div className='flex items-start justify-start gap-3 mt-4'>
                        <button type='submit' className='bg-[#5081b3] py-[10px] lg:px-[30px] xs:px-[17px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>Generate All Invoices</button>
                        <button type='submit' className='bg-[#5081b3] py-[10px] lg:px-[50px] xs:px-[17px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>Delete All Invoices</button>
                    </div>
                </form>
                <form className='mt-[3rem]'>
                    <span>
                        <label>Select Customer</label>
                        <select className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md">
                            <option>--Select--</option>
                            <option>019-Customer 19</option>
                            <option>02-Customer 2</option>
                            <option>03-Customer 3</option>
                            <option>04-Customer 4</option>
                            <option>05-Customer 5</option>
                            <option>06-Customer 6</option>
                            <option>1-1</option>
                            <option>ameen-Ameen Ashear</option>
                            <option>sddddd-nerko</option>
                            <option>sai-sainath</option>
                        </select>
                    </span>
                    <button type='submit' className='bg-[#5081b3] py-[10px] px-[30px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center mt-[2rem]'>Create Single Invoice</button>
                </form>
            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Invoice