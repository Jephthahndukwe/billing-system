import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const Expense = () => {

    const prod = [
        {
            id: 1,
            expense: 'TEA',
            date: '02-Jul-2022	',
            amount: '1000.00',
            remark: '',
        },
        {
            id: 2,
            expense: '100',
            date: '02-Jul-2022	',
            amount: '1000.00',
            remark: '',
        },
        {
            id: 3,
            expense: 'FAISAL SALERY	',
            date: '15-Jul-2022',
            amount: '55555.00',
            remark: '',
        },
        {
            id: 4,
            expense: '100',
            date: '03-Aug-2022',
            amount: '700.00',
            remark: '4G R',
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
                    <h2 className='text-[14px] bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>EXPENSE FORM</h2>
                    <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                        <form className="px-[10px] mt-8 flex flex-wrap">
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Expense</label><br/>
                               <select className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" >
                                    <option>--Select--</option>
                               </select>
                            </span>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Date</label><br/>
                                <input type='date' className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                            </span>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Amount</label><br/>
                                <input type='text' className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                            </span>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Re Order Level</label><br/>
                                <textarea cols="30" rows="3"  className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                            </span>
                            <div className='flex flex-wrap xs:justify-start xs:items-start lg:items-end lg:justify-end gap-3 mt-[2rem]'>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SAVE</button>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>DELETE</button>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>CANCEL</button>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SEARCH</button>
                            </div>
                        </form>
                        <div className='mt-[5rem] overflow-x-auto h-[75vh]'>
                            <table className='border-collapse'>
                                <tr>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>EXPENSE</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>EX_DATE</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>AMOUNT</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>REMARKS</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>SELECT</th>
                                </tr>
                                {
                                    prod.map((index) => (
                                        <tr>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-center'>{index.expense}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-center'>{index.date}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-center'>{index.amount}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-center'>{index.remark}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-center'>Select</td>
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

export default Expense