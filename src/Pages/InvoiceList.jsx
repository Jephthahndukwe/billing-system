import React from 'react'
import { FaTruckFront } from "react-icons/fa6";
import TopNavbar from '../Component/TopNavbar';
import Navbar from '../Component/Navbar';


const InvoiceList = () => {

    const invoice = [
        {
            id: 1,
            code : '113536',
            date: '01-Mar-2020',
            type: 'Customer',
            name: "019-Customer 19",
            status: 'No',
            detail: "Select",
        },
        {
            id: 2,
            code : '113535',
            date: '01-Jan-2020	',
            type: 'Customer',
            name: "019-Customer 19",
            status: 'No',
            detail: "Select",
        },
        {
            id: 3,
            code : '113534',
            date: '01-Mar-2020',
            type: 'Customer',
            name: "019-Customer 19",
            status: 'No',
            detail: "Select",
        },
        {
            id: 4,
            code : '113533',
            date: '01-Mar-2020',
            type: 'Customer',
            name: "019-Customer 19",
            status: 'No',
            detail: "Select",
        },
        {
            id: 5,
            code : '113532',
            date: '01-Mar-2020',
            type: 'Customer',
            name: "l1-indepe-Independencia",
            status: 'No',
            detail: "Select",
        },
        {
            id: 6,
            code : '113531',
            date: '01-Mar-2020',
            type: 'Customer',
            name: "12-xcsdf",
            status: 'No',
            detail: "Select",
        },
        {
            id: 7,
            code : '113530',
            date: '01-Mar-2020',
            type: 'Customer',
            name: "123-indiwar",
            status: 'No',
            detail: "Select",
        },
        {
            id: 8,
            code : '113529',
            date: '01-Mar-2020',
            type: 'Customer',
            name: "34-sagar shrestah",
            status: 'No',
            detail: "Select",
        },
        {
            id: 9,
            code : '113528',
            date: '01-Mar-2020',
            type: 'Customer',
            name: "001-Shiva Adhikari",
            status: 'No',
            detail: "Select",
        },
        {
            id: 10,
            code : '113527',
            date: '01-Mar-2020',
            type: 'Customer',
            name: "123-Minhaz",
            status: 'No',
            detail: "Select",
        }
    ]

  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <div className='bg-[#F8F9FA] pt-[1rem] pb-[2rem]'>
      <div className='flex gap-[1rem] px-[20px]'>
        <aside className='w-[20%] h-[75vh] bg-[#fff] border-[1.5px] border-solid border-[#eee]'>
          <h2 className='text-[14px] bg-[#153450] py-[15px] px-[20px] text-[#fff] font-[500]'>QUICK LINKS</h2>
          <div className=''>
            <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Payment Collection</span></h2>
            <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Add Company</span></h2>
            <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>User History</span></h2>
            <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Send SMS</span></h2>
            <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Add Area</span></h2>
            <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Add Expense</span></h2>
            <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Expense Report</span></h2>
            <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span>Boys Collections</span></h2>
            <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] pb-3'><span>Drill Down Report</span></h2>
          </div>
        </aside>
        <div className='w-[80%]'>
        <h2 className='text-[14px] bg-[#153450] py-[15px] px-[20px] text-[#fff] font-[500]'>INVOICE LIST</h2>
            <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] px-[40px]'>
                <div className='mt-[2rem]'>
                    <form>
                        <label>Search By</label>
                        <input type='search'  className='border-b-[1px] border-b-solid border-b-[#153450] outline-none py-[1px] rounded-[2px] w-[40%] ms-[2rem]' />
                    </form>
                    <h2 className='mt-[3rem] text-[16px] font-[700] underline'>All Invoice List</h2>
                    <div className='mt-1'>
                        <table>
                            <tr>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>SO-CODE</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>SO DATE</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>SO TYPE</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>CUSTOMER NAME</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>STATUS</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>DETAIL</th>
                                <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>INVOICE</th>
                            </tr>
                            {
                                invoice.map((index) => (
                                    <tr>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.code}</td>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.date}</td>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.type}</td>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.name}</td>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.status}</td>
                                        <td className='px-[20px] py-[10px] text-[12px] border-[1px] border-solid border-[#eee] font-[600]'>{index.detail}</td>
                                        <td className='px-[20px] py-[10px] text-[16px] border-[1px] border-solid border-[#eee] font-[600] text-[#153450]'><FaTruckFront/></td>
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
    </div>
  )
}

export default InvoiceList