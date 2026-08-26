import { Toaster } from 'react-hot-toast'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'

export default function App() {

  return(
    <>
    {/* <Login /> */}
    {/* <EmployeeDashboard /> */}
    <AdminDashboard />
    <Toaster />
    </>
  )
}
