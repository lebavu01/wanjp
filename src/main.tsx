import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from 'src/App'
import Home from '@/pages/Home'
import ProductInventorySearch from '@/pages/ProductInventorySearch'
import SaleOrderSearch from '@/pages/SaleOrderSearch'
import SupplierInventorySearch from '@/pages/SupplierInventorySearch'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/Product-Inventory-Search' element={<ProductInventorySearch />} />
          <Route path='/Sale-Order-Search' element={<SaleOrderSearch />} />
          <Route path='/Supplier-Inventory-Search' element={<SupplierInventorySearch />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
