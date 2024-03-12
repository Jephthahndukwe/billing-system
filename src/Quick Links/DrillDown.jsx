import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const DrillDown = () => {

    const drill = [
        {
            id: 1,
            name: '019-Customer 19',
            type: 'Customer',
            sale: '79914.00',
            paid: '323412.00',
            balance: '243498.00'
        },
        {
            id: 2,
            name: 'dl-dream201-Arsalan',
            type: 'Customer',
            sale: '1000.00',
            paid: '0.00',
            balance: '-1000.00'
        },
        {
            id: 3,
            name: 'DD jgjx-Ch khx',
            type: 'Customer',
            sale: '150.00',
            paid: '0.00',
            balance: '-150.00'
        },
        {
            id: 4,
            name: '1-talha',
            type: 'Customer',
            sale: '1000.00',
            paid: '0.00',
            balance: '-1000.00'
        },
        {
            id: 5,
            name: '123-Minhaz',
            type: 'Customer',
            sale: '1000.00',
            paid: '0.00',
            balance: '-1000.00'
        },
        {
            id: 6,
            name: '001-Shiva Adhikari',
            type: 'Customer',
            sale: '246246.00',
            paid: '0.00',
            balance: '-246246.00'
        },
        {
            id: 7,
            name: '34-sagar shrestah',
            type: 'Customer',
            sale: '500.00',
            paid: '0.00',
            balance: '-500.00'
        },
        {
            id: 8,
            name: '123-indiwar',
            type: 'Customer',
            sale: '1500.00',
            paid: '0.00',
            balance: '-1500.00'
        },
        {
            id: 9,
            name: '12-xcsdf',
            type: 'Customer',
            sale: '1500.00',
            paid: '0.00',
            balance: '-1500.00'
        },
        {
            id: 10,
            name: 'l1-indepe-Independencia',
            type: 'Customer',
            sale: '150.00',
            paid: '0.00',
            balance: '-150.00'
        }
    ]

  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <div className='bg-[#F8F9FA] pt-[1rem] pb-[2rem]'>
            <div className='flex gap-[3rem] lg:px-[20px] xs:px-[10px]'>
                <aside className='w-[20%] h-[75vh] bg-[#fff] border-[1.5px] border-solid border-[#eee] lg:block xs:hidden'>
                    <QuickLinks/>
                </aside>
                <div className='lg:w-[80%] xs:w-[95vw]'>
                    <h2 className='text-[20px] text-[#153450] font-[600]'>Sales Drill Down Report</h2>
                    <div className='mt-5 overflow-x-auto h-[75vh]'>
                        <table className='border-collapse'>
                            <tr>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>Customer Name</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>Sales Type</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>Total Sale</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>Total Paid</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>Total Balance</th>
                            </tr>
                            {
                                drill.map((index) => (
                                    <tr key={index.id} className='bg-[#fff]'>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-start'>{index.name}</td>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-start'>{index.type}</td>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-end'>{index.sale}</td>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-end'>{index.paid}</td>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-end'>{index.balance}</td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DrillDown