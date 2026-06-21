import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Dashboard from './pages/Dashboard'
import Store from './pages/Store'
import Orders from './pages/Orders'
import Delivered from './pages/Delivered'
import Cancelled from './pages/Cancelled'
import Payments from './pages/Payments'
import Support from './pages/Support'
import Settings from './pages/Settings'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/store" element={<Store />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/delivered" element={<Delivered />} />
          <Route path="/cancelled" element={<Cancelled />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  )
}
