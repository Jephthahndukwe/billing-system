import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const Report = () => {
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

                </div>
            </div>
        </div>
    </div>
  )
}

export default Report