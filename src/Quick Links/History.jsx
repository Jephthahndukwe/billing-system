import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const History = () => {

    const hist = [
        {
            id: 1,
            action: 'Admin1',
            formname: 'PACKAGE FORM',
            date: '6/23/2020 4:58:36 PM',
            actionname: 'Insert',
            remark: 'Package Code : ISP-01 -- Package Name : SPEED 2 MB -- Company Name : PTCL Package Price : 1000'
        },
        {
            id: 2,
            action: 'Admin1',
            formname: 'PACKAGE FORM',
            date: '6/23/2020 4:58:46 PM',
            actionname: 'Insert',
            remark: 'Package Code : ISP-02 -- Package Name : SPEED 4 MB -- Company Name : PTCL Package Price : 1500'
        },
        {
            id: 3,
            action: 'Admin1',
            formname: 'PACKAGE FORM',
            date: '6/23/2020 4:59:00 PM',
            actionname: 'Insert',
            remark: 'Package Code : ISP-03 -- Package Name : SPEED 10 MB -- Company Name : PTCL Package Price : 2000'
        },
        {
            id: 4,
            action: 'Admin1',
            formname: 'CUSTOMER FORM',
            date: '6/23/2020 5:00:18 PM',
            actionname: 'Insert',
            remark: 'Profile Code : 01 -- Profile Name : Customer 1 -- Contact # : 12356666 Email # : abc@abc.com -- Address # : H.# 01 -- CNIC # : 44444-4444444-4 -- Deposit : 5000 -- Package : ISP-01 - SPEED 2 MB'
        },
        {
            id: 5,
            action: 'Admin1',
            formname: 'CUSTOMER FORM',
            date: '6/23/2020 5:00:56 PM',
            actionname: 'Insert',
            remark: 'Profile Code : 02 -- Profile Name : Customer 2 -- Contact # : 12356666 Email # : abc@abc.com -- Address # : H.# 02 -- CNIC # : 44444-4444444-4 -- Deposit : 5000 -- Package : ISP-02 - SPEED 4 MB'
        },
        {
            id: 6,
            action: 'Admin1',
            formname: 'CUSTOMER FORM',
            date: '6/23/2020 5:06:03 PM',
            actionname: 'Insert',
            remark: 'Profile Code : 03 -- Profile Name : Customer 3 -- Contact # : 12356666 Email # : abc@abc.com -- Address # : h.no 3 -- CNIC # : 44444-4444444-4 -- Deposit : 5000 -- Package : ISP-03 - SPEED 10 MB'
        },
    ]

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
                    <h2 className='text-[14px] bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>HISTORY REPORT</h2>
                    <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                        <h2>User History Report</h2>
                        <div className='mt-5 overflow-x-auto h-[75vh]'>
                            <table className='border-collapse'>
                                <tr>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-start text-[#fff] font-[400] text-[13px]'>Action By</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-start text-[#fff] font-[400] text-[13px]'>From Name</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-start text-[#fff] font-[400] text-[13px]'>Action Date</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-start text-[#fff] font-[400] text-[13px]'>Action Name</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-start text-[#fff] font-[400] text-[13px]'>Remarks</th>
                                </tr>
                                {
                                    hist.map((index) => (
                                        <tr key={index.id}>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-end'>{index.action}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-end'>{index.formname}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-end'>{index.date}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-end'>{index.actionname}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-start'>{index.remark}</td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default History