import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'

const AddSales = () => {
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
                <h2 className='text-[14px] bg-[#153450] py-[15px] px-[20px] text-[#fff] font-[500]'>ADD PACKAGE</h2>
                    <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem]'>
                        <form className='px-[10px] mt-8 flex flex-wrap'>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Sales Date</label><br/>
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
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Sales Customer</label><br/>
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
                        </form>
                        <div>
                            <h2 className='mt-[3rem] text-[16px] font-[700] underline'>Stock Qty</h2>
                            <div>
                                <table>
                                    <tr>
                                        <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[50%] text-start text-[#fff] font-[400] text-[11px]'>Product List</th>
                                        <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[5px] text-start text-[#fff] font-[400] text-[11px]'>Price</th>
                                        <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[5px] text-start text-[#fff] font-[400] text-[11px]'>Pcs</th>
                                        <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[5px] text-start text-[#fff] font-[400] text-[11px]'>Amount</th>
                                        <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[5px] text-start text-[#fff] font-[400] text-[11px]'>Discount</th>
                                        <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[5px] text-start text-[#fff] font-[400] text-[11px]'>NetAmount</th>
                                    </tr>
                                    <tr>
                                        <td className='text-center py-[5px] px-[5px] text-[12px] border-[1px] border-solid border-[#000] font-[600]'>
                                            <select className='border-[1px] border-solid border-[#000] py-[5px] px-[5px] w-[100%] outline-none'>
                                                <option selected></option>
                                                <option>st-stamping</option>
                                                <option>23-test</option>
                                                <option>001011-Telcel Ilimitado</option>
                                            </select>
                                        </td>
                                        <td className='text-center py-[5px] px-[5px] text-[12px] border-[1px] border-solid border-[#000] font-[600]'><input type='text' className='border-[1px] border-solid border-[#000] py-[5px] px-[5px] w-[100%] outline-none'/></td>
                                        <td className='text-center py-[5px] px-[5px] text-[12px] border-[1px] border-solid border-[#000] font-[600]'><input type='text' className='border-[1px] border-solid border-[#000] py-[5px] px-[5px] w-[100%] outline-none'/></td>
                                        <td className='text-center py-[5px] px-[5px] text-[12px] border-[1px] border-solid border-[#000] font-[600]'>0</td>
                                        <td className='text-center py-[5px] px-[5px] text-[12px] border-[1px] border-solid border-[#000] font-[600]'><input type='text' className='border-[1px] border-solid border-[#000] py-[5px] px-[5px] w-[100%] outline-none'/></td>
                                        <td className='text-center py-[5px] px-[5px] text-[12px] border-[1px] border-solid border-[#000] font-[600]'>0</td>
                                    </tr>
                                </table>
                            </div>
                            <div className='bg-[#eee] w-[100%] h-[30vh]'/>
                            <div className='flex flex-wrap justify-start items-start gap-3 mt-5'>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>NEW INVOICE</button>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SAVE INVOICE</button>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>PAYMENT RECOVERY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddSales