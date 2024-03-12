import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import { FaEdit } from 'react-icons/fa'
import QuickLinks from '../Component/QuickLinks'

const Product = () => {

    const prod = [
        {
            id: 1,
            code: 'st',
            name: 'stamping',
            level: '1000',
            unit: 'PCS',
            stock: 'Add Stock'
        },
        {
            id: 2,
            code: '23',
            name: 'test',
            level: '1000',
            unit: 'PCS',
            stock: 'Add Stock'
        },
        {
            id: 3,
            code: '001011',
            name: 'Telcel Ilimitado',
            level: '1000',
            unit: 'PCS',
            stock: 'Add Stock'
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
                    <h2 className='text-[14px] bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>ADD PACKAGE</h2>
                    <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                        <form className="px-[10px] mt-8 flex flex-wrap">
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Item Code</label><br/>
                                <input type='text'  className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                            </span>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Item Name</label><br/>
                                <input type='text' className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                            </span>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Measuring Unit</label><br/>
                                <select className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" >
                                    <option>--Select--</option>
                                    <option>GM</option>
                                    <option>KG</option>
                                    <option>PCS</option>
                                    <option>TEST</option>
                                </select>
                            </span>
                            <span className="mb-4 w-full md:w-1/2 md:pr-4">
                                <label>Re Order Level</label><br/>
                                <input type='text'  className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
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
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>ITEM CODE</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>ITEM NAME</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>RE-ORDER LEVEL</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>UNIT</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>STOCK</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>EDIT</th>
                                </tr>
                                {
                                    prod.map((index) => (
                                        <tr>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.code}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.name}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.level}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.unit}</td>
                                            <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.stock}</td>
                                            <td className='px-[20px] py-[10px] text-[15px] border-[1px] border-solid border-[#eee] font-[600]'><FaEdit/></td>
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

export default Product