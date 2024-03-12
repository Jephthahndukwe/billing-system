import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const Company = () => {
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
                    <h2 className='text-[14px] bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>ADD COMPANY</h2>
                    <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                        <div className='pt-[3rem]'>
                            <table>
                                <tr>
                                    <th className='bg-[#DCDCDC] py-[20px] px-[70px] border-r-[1px] border-r-solid border-r-[#000]'>New</th>
                                    <th className='bg-[#DCDCDC] py-[20px] px-[70px] border-r-[1px] border-r-solid border-r-[#000]'>Company ID</th>
                                    <th className='bg-[#DCDCDC] py-[20px] px-[70px] border-r-[1px] border-r-solid border-r-[#000]'>Company Name</th>
                                    <th className='bg-[#DCDCDC] py-[20px] px-[70px]'>ISACTIVE</th>
                                </tr>
                            </table>
                            <div className='bg-[#eee] w-[92.2%] h-[10vh] py-[20px]'>
                                <h2 className='text-center text-[12px] font-[400]'>No data to display</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Company