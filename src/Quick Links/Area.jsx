import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const Area = () => {
    
    const areas = [
        {
            id: 1,
            name: 'ghaz'
        },
        {
            id: 1,
            name: 'ghazia bad'
        },
        {
            id: 1,
            name: 'patdhari'
        },
        {
            id: 1,
            name: 'raninogor'
        },
        {
            id: 1,
            name: 'habibpir'
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
                    <h2 className='text-[14px] bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>ADD AREA</h2>
                    <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                        <form className='pt-[3rem]'>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Enter Area Name</label><br/>
                                <input type='text' className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                            </span>
                            <div className='flex flex-wrap xs:justify-start xs:items-start lg:items-end lg:justify-end gap-3 lg:px-[30px] xs:px-[10px] mt-[3rem]'>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SAVE</button>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>DELETE</button>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>CANCEL</button>
                                <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SEARCH</button>
                            </div>
                        </form>
                        <div className='mt-[5rem]'>
                            <table>
                                <tr>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[100%] text-start text-[#fff] font-[400] text-[13px]'>Area Name</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[200px] w-[50%] text-start text-[#fff] font-[400] text-[13px]'></th>
                                </tr>
                                {
                                    areas.map((index) => (
                                        <tr>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600] text-center'>{index.name}</td>
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

export default Area