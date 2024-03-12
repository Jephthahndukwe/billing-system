import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const ExpenseReport = () => {

    const report = [
        {
            id: 1,
            expenseid: '8',
            expense: 'TEA',
            tdate: '02-Jul-2022',
            amount: '1000.00',
            month: 'JUL-2022',
            created: '1'
        },
        {
            id: 2,
            expenseid: '20',
            expense: '100',
            tdate: '02-Jul-2022',
            amount: '10000.00',
            month: 'JUL-2022',
            created: '1'
        },
        {
            id: 3,
            expenseid: '4',
            expense: 'FAISAL SALERY',
            tdate: '15-Jul-2022	',
            amount: '55555.00',
            month: 'JUL-2022',
            created: '1'
        },
        {
            id: 4,
            expenseid: '20',
            expense: '100',
            tdate: '03-Aug-2022',
            amount: '700.00',
            month: 'AUG-2022',
            created: '1'
        }
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
                    <h2 className='text-[14px] bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>EXPENSE REPORT</h2>
                    <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                        <h2 className='text-[20px] font-[500] text-[#153450]'>Expense Report</h2>
                        <div className='mt-5 overflow-x-auto h-[75vh]'>
                            <table className='border-collapse'>
                                <tr>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>EXPENSE_ID</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>EXPENSE </th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>TDATE</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>AMOUNT</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>MONTH</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[22.1%] text-start text-[#fff] font-[400] text-[13px]'>CREATEDBY</th>
                                </tr>
                                {
                                    report.map((index) => (
                                        <tr key={index.id}>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-end'>{index.expenseid}</td> 
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-start'>{index.expense}</td> 
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-start'>{index.tdate}</td> 
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-end'>{index.amount}</td> 
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-start'>{index.month}</td> 
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-end'>{index.created}</td> 
                                        </tr>
                                    ))
                                }
                                <tfoot>
                                    <td className='bg-[#eee] py-[5px]'></td>
                                    <td className='bg-[#eee] py-[5px]'></td>
                                    <td className='bg-[#eee] py-[5px]'></td>
                                    <td className='bg-[#eee] py-[5px] text-end text-[12px] font-[500]'>67255.00</td>
                                    <td className='bg-[#eee] py-[5px]'></td>
                                    <td className='bg-[#eee] py-[5px]'></td>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExpenseReport