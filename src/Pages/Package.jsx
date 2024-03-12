import React from 'react'
import { FaEdit } from "react-icons/fa";
import TopNavbar from '../Component/TopNavbar';
import Navbar from '../Component/Navbar';
import QuickLinks from '../Component/QuickLinks';


const Package = () => {
 
    const pack = [
        {
            id: 1,
            code: '2000',
            name: 'Plan Internet 4 mbps',
            company: '',
            price: '150'
        },
        {
            id: 2,
            code: 'Basic001',
            name: 'Basic',
            company: '',
            price: '2000	'
        },
        {
            id: 3,
            code: '01galen',
            name: '10mbps',
            company: '',
            price: '200'
        },
        {
            id: 4,
            code: '8MU',
            name: '8M Unlimited',
            company: '',
            price: '30'
        },
        {
            id: 5,
            code: '1101sd',
            name: 'basic',
            company: '',
            price: '0'
        },
        {
            id: 6,
            code: 'asdasdas',
            name: 'Basic',
            company: '',
            price: '123123'
        },
        {
            id: 7,
            code: '007',
            name: 'test',
            company: '',
            price: '2300'
        },
        {
            id: 8,
            code: '236',
            name: 'teste',
            company: '',
            price: '69'
        },
        {
            id: 9,
            code: '9981',
            name: '1 Mbps',
            company: '',
            price: '500'
        },
        {
            id: 10,
            code: '5455',
            name: 'Telcel en Casa',
            company: '',
            price: '500'
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
         <h2 className='text-[14px] bg-[#153450] py-[15px] px-[20px] text-[#fff] font-[500]'>ADD PACKAGE</h2>
            <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem]'>
                <form>
                    <div className='flex flex-wrap items-center justify-between lg:px-[40px] xs:px-[10px] pt-[2rem]'>
                        <span>
                            <label>Package Code</label>
                            <input type="text" className='border-b-[1px] border-b-solid border-b-[#153450] outline-none py-[1px] rounded-[2px] w-[100%] mt-4' />
                        </span>
                        <span className='lg:mt-0 xs:mt-[3rem]'>
                            <label>Package Name</label>
                            <input type="text" className='border-b-[1px] border-b-solid border-b-[#153450] outline-none py-[1px] rounded-[2px] w-[100%] mt-4' />
                        </span>
                        <span className='lg:mt-0 xs:mt-[3rem]'>
                            <label>Company Name</label>
                            <input type="text" className='border-b-[1px] border-b-solid border-b-[#153450] outline-none py-[1px] rounded-[2px] w-[100%] mt-4' />
                        </span>
                        <span className='mt-[3rem]'>
                            <label>Package Price</label>
                            <input type="number" className='border-b-[1px] border-b-solid border-b-[#153450] outline-none py-[1px] rounded-[2px] w-[100%] mt-4' />
                        </span>
                    </div>
                    <div className='flex flex-wrap xs:justify-start xs:items-start lg:items-end lg:justify-end gap-3 lg:px-[30px] xs:px-[10px] mt-[3rem]'>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SAVE</button>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>DELETE</button>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>CANCEL</button>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SEARCH</button>
                    </div>
                </form>
                <div className='lg:px-[40px] xs:px-[10px] mt-[5rem] overflow-x-auto h-[75vh]'>
                    <table className='border-collapse'>
                        <tr>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>PACKAGE CODE</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>PACKAGE NAME</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>COMPANY</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>PACKAGE PRICE</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>EDIT</th>
                        </tr>
                        {
                           pack.map((index) => (
                            <tr key={index.id}>
                                <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.code}</td>
                                <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.name}</td>
                                <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.company}</td>
                                <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.price}</td>
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

export default Package