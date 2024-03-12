import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'


const Collection = () => {

    const collect = [
        {
            id: 1,
            name: 'Collector Boy 1',
            date: '24-Jun-2020',
            previous: '0',
            total: '5000',
            received: '0',
            balance: '5000'
        },
        {
            id: 2,
            name: 'Collector Boy 2',
            date: '24-Jun-2020',
            previous: '5000',
            total: '55000',
            received: '40000',
            balance: '20000'
        },
        {
            id: 3,
            name: 'Collector Boy 3',
            date: '24-Jun-2020',
            previous: '8000',
            total: '35000',
            received: '0',
            balance: '43000'
        },
        {
            id: 4,
            name: 'Collector Boy 4',
            date: '24-Jun-2020',
            previous: '0',
            total: '45000',
            received: '35000',
            balance: '10000'
        },
    ] 

  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <div className='bg-[#F8F9FA] pt-[1rem] pb-[2rem]'>
            <div className='flex gap-[1rem] lg:px-[20px] xs:px-[10px]'>
                <aside className='w-[20%] h-[75vh] bg-[#fff] border-[1.5px] border-solid border-[#eee] lg:block xs:hidden'>
                    <QuickLinks />
                </aside>
                <div className='lg:w-[80%] xs:w-[95vw]'>
                    <h2 className='text-[14px] bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>BOYS COLLECTIONS</h2>
                    <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                    <div className='mt-[5rem] overflow-x-auto h-[50vh]'>
                        <table className='border-collapse'>
                            <tr>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>NAME</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>DATE</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>PREVIOUS BALANCE</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>TOTAL COLLECTION</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>RECEIVED</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] w-[25%] text-start text-[#fff] font-[400] text-[13px]'>BALANCE</th>
                            </tr>
                           {
                            collect.map((index) => (
                                <tr key={index.id} className='border-[2px] border-solid border-[#000]'>
                                    <td className='px-[20px] py-[10px] text-[12px] bg-[#6699FF] font-[600] text-center'>{index.name}</td>
                                    <td className='px-[20px] py-[10px] text-[12px] font-[600] text-center'>{index.date}</td>
                                    <td className='px-[20px] py-[10px] text-[12px] font-[600] text-center'>{index.previous}</td>
                                    <td className='px-[20px] py-[10px] text-[12px] font-[600] text-center'>{index.total}</td>
                                    <td className='px-[20px] py-[10px] text-[12px] font-[600] text-center'>{index.received}</td>
                                    <td className='px-[20px] py-[10px] text-[12px] font-[600] text-center'>{index.balance}</td>
                                </tr>
                            ))
                           }
                           <tfoot>
                            <tr className='bg-[#153450]'>
                                <td className='px-[20px] py-[10px] text-[19px] font-[600] text-[#fff]'>Total</td>
                                <td className='px-[20px] py-[10px] text-[19px] font-[600] text-[#fff]'></td>
                                <td className='px-[20px] py-[10px] text-[19px] font-[600] text-[#fff]'>13000</td>
                                <td className='px-[20px] py-[10px] text-[19px] font-[600] text-[#fff]'>14000</td>
                                <td className='px-[20px] py-[10px] text-[19px] font-[600] text-[#fff]'>75000</td>
                                <td className='px-[20px] py-[10px] text-[19px] font-[600] text-[#fff]'>78000</td>
                            </tr>
                           </tfoot>
                        </table>
                    </div>
                    <div className='flex flex-wrap xs:justify-start xs:items-start lg:items-end lg:justify-end gap-3'>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SAVE</button>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>DELETE</button>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>CANCEL</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collection