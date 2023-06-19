import config from '@/config'

// Layouts
import HomeLayout from '@/layouts/HomeLayout'

// Pages
import Home from '@/pages/Home'
import SaleOrderSearch from '@/pages/SaleOrderSearch'
import PurchaseRequestOrders from '@/pages/PurchaseRequestOrders'
import ProductInventorySearch from '@/pages/ProductInventorySearch'
import SupplierInventorySearch from '@/pages/SupplierInventorySearch'

// Public routes
const publicRoutes = [
  { path: config.routes.Home, component: Home, layout: HomeLayout },
  { path: config.routes.SaleOrderSearch, component: SaleOrderSearch },
  { path: config.routes.PurchaseRequestOrders, component: PurchaseRequestOrders },
  { path: config.routes.ProductInventorySearch, component: ProductInventorySearch },
  { path: config.routes.SupplierInventorySearch, component: SupplierInventorySearch }
  // { path: config.routes.upload, component: Upload, layout: HeaderOnly },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
