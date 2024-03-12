import React from 'react'
import TopNavbar from '../Component/TopNavbar'
import Navbar from '../Component/Navbar'
import QuickLinks from '../Component/QuickLinks'

const Customer = () => {

    const custo = [
        {
            id: 1,
            name: '019-Customer 19',
            contact: '123566669',
            email: 'abc@abc9.com',
            cnic: '44444-4444444-49',
            package: 'SPEED 4 MB',
            deposit: '1009',
            areaName: 'Area 1',
            registration: '23-Jul-2024',
            select: 'select'
        },
        {
            id: 2,
            name: '02-Customer 2',
            contact: '222222',
            email: 'abc@abc.com',
            cnic: '22222-2222222-2',
            package: 'SPEED 10 MB',
            deposit: '2000',
            areaName: 'Area 2',
            registration: '23-Jul-2024',
            select: 'select'
        },
        {
            id: 3,
            name: '03-Customer 3',
            contact: '12356666',
            email: 'abc@abc9.com',
            cnic: '323232356565',
            package: 'LandLine PTCL',
            deposit: '3000',
            areaName: 'Area 3',
            registration: '23-Jul-2024',
            select: 'select'
        },
        {
            id: 4,
            name: '04-Customer 4',
            contact: '123566669',
            email: 'abc@abc9.com',
            cnic: '44444-4444444-4',
            package: 'LandLine PTCL',
            deposit: '222',
            areaName: 'Area 4',
            registration: '23-Jul-2024',
            select: 'select'
        },
        {
            id: 5,
            name: '05-Customer 5',
            contact: '12356666',
            email: 'abc@abc9.com',
            cnic: '44444-4444444-4',
            package: 'SPEED 8 MB',
            deposit: '1000',
            areaName: 'Area 5',
            registration: '23-Jul-2024',
            select: 'select'
        },
        {
            id: 6,
            name: '06-Customer 6',
            contact: '898676',
            email: 'abc@abc9.com',
            cnic: '42402-9669897-1',
            package: 'SPEED 2 MB',
            deposit: '1100',
            areaName: 'Area 6',
            registration: '23-Jul-2024',
            select: 'select'
        },
        {
            id: 7,
            name: '1-1',
            contact: '1',
            email: '1',
            cnic: '1',
            package: 'SPEED 2 MB',
            deposit: '1100',
            areaName: 'Area 7',
            registration: '23-Jul-2024',
            select: 'select'
        },
        {
            id: 8,
            name: 'ameen-Ameen Ashear',
            contact: '03332122756',
            email: 'aasher@softpak.com',
            cnic: '42201-4240219-1',
            package: '10 MBPS CIR Internet Bandwidth',
            deposit: '5000',
            areaName: 'Area 8',
            registration: '23-Jul-2024',
            select: 'select'
        },
        {
            id: 9,
            name: 'sddddd-nerko',
            contact: '',
            email: '',
            cnic: '',
            package: '10 MBPS CIR Internet Bandwidth',
            deposit: '200',
            areaName: 'Area 9',
            registration: '23-Jul-2024',
            select: 'select'
        },
        {
            id: 10,
            name: 'sai-sainath',
            contact: '123456',
            email: 'panchal@gmail.com',
            cnic: '',
            package: '10 MBPS CIR Internet Bandwidth',
            deposit: '800',
            areaName: 'Area 10',
            registration: '23-Jul-2024',
            select: 'select'
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
          <h2 className='text-[14px] bg-[#153450] py-[15px] lg:px-[20px] xs:px-[10px] text-[#fff] font-[500]'>ADD CUSTOMER PROFILE</h2>
            <div className='bg-[#fff] border-[1.5px] border-solid border-[#eee] p-[10px] pb-[4rem] lg:px-[40px] xs:px-[10px]'>
                <form className="px-[10px] mt-8 flex flex-wrap">
                    <div className="mb-4 w-full md:w-1/2 md:pr-4">
                        <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
                        <input type="text" id="userId" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pl-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pr-4">
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact #</label>
                        <input type="text" id="contact" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pl-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pr-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address 1</label>
                        <input type="text" id="address" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pl-4">
                        <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">CNIC #000</label>
                        <input type="text" id="cnic" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pr-4">
                        <label htmlFor="deposit" className="block text-sm font-medium text-gray-700">Deposit</label>
                        <input type="text" id="deposit" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pl-4">
                        <label htmlFor="package" className="block text-sm font-medium text-gray-700">Package</label>
                        <input type="text" id="package" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pr-4">
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area</label>
                        <input type="text" id="area" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pl-4">
                        <label htmlFor="Registration" className="block text-sm font-medium text-gray-700">Registration Date</label>
                        <input type="date" id="registration" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pr-4">
                        <label htmlFor="connection" className="block text-sm font-medium text-gray-700">Connection Charges</label>
                        <input type="text" id="connection" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pl-4">
                        <label htmlFor="router" className="block text-sm font-medium text-gray-700">Router</label>
                        <input type="text" id="router" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pr-4">
                        <label htmlFor="wire" className="block text-sm font-medium text-gray-700">Wire</label>
                        <input type="text" id="wire" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pl-4">
                        <label htmlFor="other" className="block text-sm font-medium text-gray-700">Other</label>
                        <input type="text" id="other" className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md py-[5px] px-[10px] outline-none sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className='flex flex-wrap items-start justify-start gap-3 mt-[2rem]'>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SAVE</button>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>DELETE</button>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>CANCEL</button>
                        <button type='submit' className='bg-[#5081b3] py-[10px] px-[50px] text-[12px] rounded-[20px] text-[#fff] font-[700] text-center'>SEARCH</button>
                    </div>
                </form>

                <div className='lg:px-[20px] xs:px-[10px] mt-[5rem] overflow-x-auto'>
                    <table className='border-collapse'>
                        <tr>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>CODE PRO NAME</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>CONTACT #	</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>EMAIL	</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>CNIC #	</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>PACKAGE	</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>DEPOSIT	</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>AREA NAME	</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>REGISTRATION	</th>
                            <th className='bg-[#153450] border-[1px] border-solid border-[#eee] py-[10px] px-[10px] w-[20%] text-start text-[#fff] font-[400] text-[11px]'>SELECT</th>
                        </tr>
                       {
                        custo.map((index) => (
                            <tr>
                                <td className='px-[20px] py-[10px] text-[10px] border-[1px] border-solid border-[#eee] font-[600]'>{index.name}</td>
                                <td className='px-[20px] py-[10px] text-[10px] border-[1px] border-solid border-[#eee] font-[600]'>{index.contact}</td>
                                <td className='px-[20px] py-[10px] text-[10px] border-[1px] border-solid border-[#eee] font-[600]'>{index.email}</td>
                                <td className='px-[20px] py-[10px] text-[10px] border-[1px] border-solid border-[#eee] font-[600]'>{index.cnic}</td>
                                <td className='px-[20px] py-[10px] text-[10px] border-[1px] border-solid border-[#eee] font-[600]'>{index.package}</td>
                                <td className='px-[20px] py-[10px] text-[10px] border-[1px] border-solid border-[#eee] font-[600]'>{index.deposit}</td>
                                <td className='px-[20px] py-[10px] text-[10px] border-[1px] border-solid border-[#eee] font-[600]'>{index.areaName}</td>
                                <td className='px-[20px] py-[10px] text-[10px] border-[1px] border-solid border-[#eee] font-[600]'>{index.registration}</td>
                                <td className='px-[20px] py-[10px] text-[10px] border-[1px] border-solid border-[#eee] font-[600]'>{index.select}</td>
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

export default Customer