import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const Payment = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <div className='bg-[#F8F9FA] pt-[1rem] pb-[2rem]'>
            <div className='flex gap-[1rem] lg:px-[20px] xs:px-[10px]'>
            <aside className='w-[20%] h-[75vh] bg-[#fff] border-[1.5px] border-solid border-[#eee] lg:block xs:hidden'>
                <QuickLinks/>
            </aside>
                <div className='lg:w-[80%] xs:w-[95vw] border-[1px] px-[20px] py-[20px] border-[#153450] border-solid'>
                  <h2 className='text-[#153450] text-[22px] font-[700]'>Customer Ledger</h2>
                  <div>
                  <form className="px-[10px] mt-8 flex flex-wrap">
                      <span className="mb-4 w-full md:w-1/2 md:pr-4">
                          <label>Customer</label><br/>
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
                      <span className="mb-4 w-full md:w-1/2 md:pr-4">
                      <label>Select Invoice</label><br/>
                        <select className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md">
                           <option></option>
                          </select>
                      </span>
                      <span className="mb-4 w-full md:w-1/2 md:pr-4">
                      <label>Date</label><br/>
                        <input type='date' className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                      </span>
                      <span className="mb-4 w-full md:w-1/2 md:pr-4">
                      <label>Paid Amount</label><br/>
                        <input type='text' className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                      </span>
                      <span className="mb-4 w-full md:w-1/2 md:pr-4">
                      <label>Cheque No</label><br/>
                        <input type='text' className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                      </span>
                      <span className="mb-4 w-full md:w-1/2 md:pr-4">
                      <label>Remarks</label><br/>
                        <input type='text' className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                      </span>
                      <div className='flex justify-start items-start lg:mt-[6rem] lg:ms-[-30rem]'>
                        <button type='submit' className='bg-[#5081b3] py-[10px] lg:px-[30px] xs:px-[17px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>ADD PAYMENT</button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment