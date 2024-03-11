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
        </Routes>
      </Router>
    </>
  )
}

export default App
