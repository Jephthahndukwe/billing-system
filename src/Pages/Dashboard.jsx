import React from 'react'
import { Link } from 'react-router-dom'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const Dashboard = ({handleLogout}) => {

    const dash = [
        {
           id: 1,
           code: 'SO-111412',
           date: '01-Feb-2020',
           customer: '02-Customer 2',
           amount: '2200.00',
           paid: '0.00',
           balance: '-2200.00'
        },  
        {
            id: 2,
            code: 'SO-111412',
            date: '01-Feb-2020',
            customer: '02-Customer 2',
            amount: '2200.00',
            paid: '0.00',
            balance: '-2200.00'
        },
        {
            id: 3,
            code: 'SO-111412',
            date: '01-Feb-2020',
            customer: '02-Customer 2',
            amount: '2200.00',
            paid: '0.00',
            balance: '-2200.00'
        },
        {
            id: 4,
            code: 'SO-111412',
            date: '01-Feb-2020',
            customer: '02-Customer 2',
            amount: '2200.00',
            paid: '0.00',
            balance: '-2200.00'
        },
        {
            id: 5,
            code: 'SO-111412',
            date: '01-Feb-2020',
            customer: '02-Customer 2',
            amount: '2200.00',
            paid: '0.00',
            balance: '-2200.00'
        },
        {
            id: 6,
            code: 'SO-111412',
            date: '01-Feb-2020',
            customer: '02-Customer 2',
            amount: '2200.00',
            paid: '0.00',
            balance: '-2200.00'
        },
        {
            id: 7,
            code: 'SO-111412',
            date: '01-Feb-2020',
            customer: '02-Customer 2',
            amount: '2200.00',
            paid: '0.00',
            balance: '-2200.00'
        },
        {
            id: 8,
            code: 'SO-111412',
            date: '01-Feb-2020',
            customer: '02-Customer 2',
            amount: '2200.00',
            paid: '0.00',
            balance: '-2200.00'
        },
        {
            id: 9,
            code: 'SO-111412',
            date: '01-Feb-2020',
            customer: '02-Customer 2',
            amount: '2200.00',
            paid: '0.00',
            balance: '-2200.00'
        },
        {
            id: 10,
            code: 'SO-111412',
            date: '01-Feb-2020',
            customer: '02-Customer 2',
            amount: '2200.00',
            paid: '0.00',
            balance: '-2200.00'
        }
    ]




  return (
    <div>
        <TopNavbar handleLogout={handleLogout} />
        <Navbar/>
        <div className='bg-[#F8F9FA] pt-[1rem] pb-[2rem]'>
      <div className='flex gap-[1rem] lg:px-[20px] xs:px-[10px]'>
        <aside className='w-[20%] h-[75vh] bg-[#fff] border-[1.5px] border-solid border-[#eee] lg:block xs:hidden'>
          <QuickLinks/>
        </aside>
        <div className='lg:w-[80%] xs:w-[95vw]'>
            <div>
                <h2 className='text-[14px] bg-[#153450] py-[15px] px-[20px] text-[#fff] font-[500]'>PAYMENTS RECEIVABLE</h2>
                <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px]'>
                    <div className='lg:flex items-center gap-[2rem]'>
                        <div className='overflow-x-auto h-[65vh]'>
                            <table className='border-collapse'>
                                <tr>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-center text-[#fff] font-[400]'>S0-CODE</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-center text-[#fff] font-[400]'>S0-DATE</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-center text-[#fff] font-[400]'>CUSTOMER</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-center text-[#fff] font-[400]'>AMOUNT</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-center text-[#fff] font-[400]'>PAID</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-center text-[#fff] font-[400]'>BALANCE</th>
                                    <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[20px] text-center text-[#fff] font-[400]'>VIEW</th>
                                </tr>
                                { 
                                    dash.map((index) => (
                                        <tr key={index.id}>
                                            <td className=' border-[1px] border-solid text-[14px] border-[#eee] py-[10px] px-[13px] text-center text-[#000] font-[400]'>{index.code}</td>
                                            <td className=' border-[1px] border-solid text-[14px] border-[#eee] py-[10px] px-[13px] text-center text-[#000] font-[400]'>{index.date}</td>
                                            <td className=' border-[1px] border-solid text-[14px] border-[#eee] py-[10px] px-[13px] text-center text-[#000] font-[400]'>{index.customer}</td>
                                            <td className=' border-[1px] border-solid text-[14px] border-[#eee] py-[10px] px-[13px] text-center text-[#000] font-[400]'>{index.amount}</td>
                                            <td className=' border-[1px] border-solid text-[14px] border-[#eee] py-[10px] px-[13px] text-center text-[#000] font-[400]'>{index.paid}</td>
                                            <td className=' border-[1px] border-solid text-[14px] border-[#eee] py-[10px] px-[13px] text-center text-[#000] font-[400]'>{index.balance}</td>
                                            <td className=' border-[1px] border-solid text-[14px] border-[#eee] py-[10px] px-[13px] text-center text-[#000] font-[400]'><Link to=''>VIEW</Link></td>
                                        </tr> 
                                    ))
                                }
                            </table>
                        </div>
                    <div>
                        <div  className='overflow-x-auto h-[65vh] lg:mt-0 xs:mt-[4rem]'>
                            <h2 className='text-[#ff0000] text-[16px] font-[700] leading-[18px] bg-[#ffff00] text-center'>Latest Receivable</h2>
                                <table className='border-collapse'>
                                    <tr>
                                        <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] lg:px-[40px] xs:px-[72px] text-center text-[#fff] font-[400]'>CODE</th>
                                        <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] lg:px-[40px] xs:px-[72px] text-center text-[#fff] font-[400]'>DATE</th>
                                    </tr>
                                    <tr>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>SO-113434</td>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>06-Mar-2024</td>
                                    </tr>
                                    <tr>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>SO-113434</td>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>06-Mar-2024</td>
                                    </tr>
                                    <tr>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>SO-113434</td>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>06-Mar-2024</td>
                                    </tr>
                                    <tr>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>SO-113434</td>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>06-Mar-2024</td>
                                    </tr>
                                    <tr>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>SO-113434</td>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>06-Mar-2024</td>
                                    </tr>
                                    <tr>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>SO-113434</td>
                                        <td className='px-[10px] border-[1px] border-solid border-[#eee] py-[10px] text-center text-[#000] font-[400]'>06-Mar-2024</td>
                                    </tr>

                                </table>
                            </div>
                    </div>
                    </div>
                </div>
                </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Dashboard