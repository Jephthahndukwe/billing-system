import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinks = () => {
  return (
    <div>
            <h2 className='text-[14px] bg-[#153450] py-[15px] px-[20px] text-[#fff] font-[500]'>QUICK LINKS</h2>
            <div className=''>
                <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span><Link to='/payment'>Payment Collection</Link></span></h2>
                <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span><Link to='/company'>Add Company</Link></span></h2>
                <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span><Link to='/history'>User History</Link></span></h2>
                <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span><Link to='/mail'>Send Mail</Link></span></h2>
                <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span><Link to='/area'>Add Area</Link></span></h2>
                <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span> <Link to='/expense'>Add Expense</Link></span></h2>
                <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span><Link to='/expensereport'>Expense Report</Link></span></h2>
                <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] border-b-[1px] border-b-solid border-b-[#eee] pb-3'><span><Link to='/collection'>Boys Collections</Link></span></h2>
                <h2 className='pt-[10px] px-[20px] text-[14px] font-[400] pb-3'><span><Link to='/drilldown'>Drill Down Report</Link></span></h2>
            </div>
    </div>
  )
}

export default QuickLinks