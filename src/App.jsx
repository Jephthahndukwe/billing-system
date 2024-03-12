import './App.css'
import TopNavbar from './Component/TopNavbar'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Package from './Pages/Package'
import Customer from './Pages/Customer'
import Invoice from './Pages/Invoice'
import InvoiceList from './Pages/InvoiceList'
import Login from './Auth/Login'
import Sales from './Pages/Sales'
import Product from './Pages/Product'
import AddSales from './Pages/AddSales'
import Payment from './Quick Links/Payment'
import Report from './Quick Links/Report'
import Company from './Quick Links/Company'
import Mail from './Quick Links/Mail'
import Area from './Quick Links/Area'
import Expense from './Quick Links/Expense'
import Collection from './Quick Links/Collection'

function App({ setLoggedIn, setIsAdmin }) {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Login setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} /> }  />
          <Route path='/dashboard' element={ <Dashboard  setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} /> } />
          <Route path='package' element={ <Package/> } />
          <Route path='customer' element={ <Customer/> } />
          <Route path='invoice' element={ <Invoice/> } />
          <Route path='invoicelist' element={ <InvoiceList/> } />
          <Route path='sales' element={ <Sales/> } />
          <Route path='product' element={ <Product/> } />
          <Route path='addsale' element={ <AddSales/> } />

          {/* QUICK LINKS */}
          <Route path='payment' element={ <Payment/> } />
          <Route path='company' element={ <Company/> } />
          <Route path='mail' element={ <Mail/> } />
          <Route path='area' element={ <Area/> } />
          <Route path='expense' element={ <Expense/> } />
          <Route path='collection' element={ <Collection/> } />
          <Route path='report' element={ <Report/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
