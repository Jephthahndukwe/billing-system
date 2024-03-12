import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const Mail = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <div className='bg-[#F8F9FA] pt-[1rem] pb-[2rem]'>
            <div className='flex gap-[1rem] lg:px-[20px] xs:px-[10px]'>
                <aside className='w-[20%] h-[75vh] bg-[#fff] border-[1.5px] border-solid border-[#eee] lg:block xs:hidden'>
                    <QuickLinks/>
                </aside>
                <div className='lg:w-[80%] xs:w-[95vw]'>
                    <h2 className='text-[25px] text-center bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>Email & Notification</h2>
                    <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                        <div>
                            <form>
                                <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                    <label>Send To</label><br/>
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
                                <div>
                                    <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                        <label className='mt-[5rem]'>Mail Text</label><br/>
                                        <textarea rows='4' cols='4' className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                                    </span>
                                </div>
                                <div className='flex justify-start items-start mt-3'>
                                    <button type='submit' className='bg-[#5081b3] py-[10px] lg:px-[30px] xs:px-[17px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SEND MAIL</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mail